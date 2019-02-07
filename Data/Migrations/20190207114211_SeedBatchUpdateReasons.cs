using Data.Models;
using Entities;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Data.Migrations
{
    public partial class SeedBatchUpdateReasons : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            using (var context = new ProjectEntities())
            {
                var reason1 = new BatchUpdateReason
                {
                    Reason = "Delivery from supplier"
                };
                context.BatchUpdateReasons.Add(reason1);

                var reason2 = new BatchUpdateReason
                {
                    Reason = "Delivery to customer"
                };
                context.BatchUpdateReasons.Add(reason2);

                var reason3 = new BatchUpdateReason
                {
                    Reason = "Lost stock"
                };
                context.BatchUpdateReasons.Add(reason3);

                var reason4 = new BatchUpdateReason
                {
                    Reason = "Damaged stock"
                };
                context.BatchUpdateReasons.Add(reason4);

                context.SaveChanges();
            }
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
