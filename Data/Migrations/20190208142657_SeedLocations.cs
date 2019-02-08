using Data.Models;
using Entities;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Data.Migrations
{
    public partial class SeedLocations : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            using (var context = new ProjectEntities())
            {
                var location1 = new Location
                {
                    Name = "Fifa"
                };
                context.Locations.Add(location1);

                var location2 = new Location
                {
                    Name = "Hugo Boss"
                };
                context.Locations.Add(location2);

                var location3 = new Location
                {
                    Name = "Odlo"
                };
                context.Locations.Add(location3);

                context.SaveChanges();
            }
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
