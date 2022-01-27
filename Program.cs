var builder = WebApplication.CreateBuilder(args);

// St�d f�r RazorPages
builder.Services.AddRazorPages();

var app = builder.Build();

// St�d f�r statiska filer
app.UseStaticFiles();

// St�d f�r routing
app.UseRouting();

// Aktiverar RazorPages
app.MapRazorPages();

app.Run();
