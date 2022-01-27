var builder = WebApplication.CreateBuilder(args);

// Stöd för RazorPages
builder.Services.AddRazorPages();

var app = builder.Build();

// Stöd för statiska filer
app.UseStaticFiles();

// Stöd för routing
app.UseRouting();

// Aktiverar RazorPages
app.MapRazorPages();

app.Run();
