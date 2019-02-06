using System;
using Application.Services;
using Data.Models;
using Data.Queries;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.SpaServices.Webpack;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace FelFel
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            var connectionString = Configuration.GetConnectionString("ProjectEntities");
            services.AddDbContext<ProjectEntities>(options =>
            {
                options.UseSqlServer(connectionString);
            });
            ProjectEntities.ConnectionString = connectionString;

            // Repositories
            services.AddScoped<IBatchRepository, BatchRepository>();
            services.AddScoped<IBatchItemRepository, BatchItemRepository>();

            // Helpers
            services.AddScoped<IUnitOfWork, UnitOfWork>();

            // Services
            services.AddScoped<IBatchService, BatchService>();

            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            using (var scope = app.ApplicationServices.GetRequiredService<IServiceScopeFactory>().CreateScope())
            {
                try
                {
                    var context = scope.ServiceProvider.GetService<ProjectEntities>();
                    context.Database.Migrate();
                }
                catch (Exception ex)
                {
                    // rethrow exception after logging 
                    throw;
                }
            }

            if (env.IsDevelopment())
            {
                app.UseBrowserLink();
                app.UseDeveloperExceptionPage();

                // for angular development
                app.UseWebpackDevMiddleware(new WebpackDevMiddlewareOptions
                {
                    HotModuleReplacement = true
                });
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            app.UseStaticFiles();

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");
            });
        }
    }
}
