using Data.Models;
using Microsoft.EntityFrameworkCore.Migrations;
using System.Linq;

namespace Data.Migrations
{
    public partial class SeedLocationsWithWaste : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            using (var context = new ProjectEntities())
            {
                var location = context.Locations.FirstOrDefault(x => x.Id == 2);
                location.Name = "Waste";

                context.Locations.Add(new Entities.Location
                {
                    Name = "Fifa"
                });

                context.Locations.Add(new Entities.Location
                {
                    Name = "Hugo Boss"
                });

                context.SaveChanges();
            }
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
