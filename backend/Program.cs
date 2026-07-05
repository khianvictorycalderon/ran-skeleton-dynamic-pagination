// Builder
using backend.Data;

var builder = WebApplication.CreateBuilder(args);

// Services
builder.Services.AddCors(options =>
{
   options.AddDefaultPolicy(policy =>
   {
      policy
        .WithOrigins(builder.Configuration.GetSection("Cors:AllowedOrigins").Get<string[]>() ?? Array.Empty<string>())
        .AllowAnyHeader()
        .WithMethods("GET");
   });
});

// Main Application
var app = builder.Build();

// Middlewares
app.UseCors();

// Return a random initial 5 response
app.MapGet("/api/data/initial", async () =>
{
   await Task.Delay(1500);
   return SampleData.Cards.Take(5);
});

// Return a sample response (For 1 only, when user scrolls)
app.MapGet("/api/data/new", async () =>
{
    await Task.Delay(500);
    return SampleData.Cards[Random.Shared.Next(SampleData.Cards.Count)];
});

// Application Runner
app.Run();