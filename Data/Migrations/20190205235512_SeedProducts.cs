using Data.Models;
using Entities;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Data.Migrations
{
    public partial class SeedProducts : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            using (var context = new ProjectEntities())
            {
                var product1 = new Product
                {
                    Name = "Pasta"
                };
                context.Products.Add(product1);

                var product2 = new Product
                {
                    Name = "Lentils"
                };
                context.Products.Add(product2);

                context.SaveChanges();
            }
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
