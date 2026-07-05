// Builder
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

// Application Runner
app.Run();