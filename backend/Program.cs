// Builder
using Microsoft.AspNetCore.Http.HttpResults;

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

// Return a sample response
app.MapGet("/api/data", () =>
{
   return new
   {
       Title = "asfsa",
       Description = "safsaf"
   };
});

// Application Runner
app.Run();