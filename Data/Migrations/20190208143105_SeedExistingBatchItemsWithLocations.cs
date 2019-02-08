using Data.Models;
using System.Linq;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Data.Migrations
{
    public partial class SeedExistingBatchItemsWithLocations : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            using (var context = new ProjectEntities())
            {
                var firstLocation = context.Locations.FirstOrDefault();

                context.BatchItems.ToList().ForEach(item =>
                {
                    item.Location = firstLocation;
                });

                context.SaveChanges();
            }
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
