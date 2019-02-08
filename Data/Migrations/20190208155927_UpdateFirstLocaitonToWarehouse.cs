using Data.Models;
using Microsoft.EntityFrameworkCore.Migrations;
using System.Linq;

namespace Data.Migrations
{
    public partial class UpdateFirstLocaitonToWarehouse : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            using (var context = new ProjectEntities())
            {
                var location = context.Locations.FirstOrDefault();
                location.Name = "Warehouse";

                context.SaveChanges();
            }
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
