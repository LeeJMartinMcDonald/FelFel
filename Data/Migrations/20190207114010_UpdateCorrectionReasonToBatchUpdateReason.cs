using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Data.Migrations
{
    public partial class UpdateCorrectionReasonToBatchUpdateReason : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_BatchItems_CorrectionReasons_CorrectionReasonId",
                table: "BatchItems");

            migrationBuilder.DropTable(
                name: "CorrectionReasons");

            migrationBuilder.RenameColumn(
                name: "CorrectionReasonId",
                table: "BatchItems",
                newName: "BatchUpdateReasonId");

            migrationBuilder.RenameIndex(
                name: "IX_BatchItems_CorrectionReasonId",
                table: "BatchItems",
                newName: "IX_BatchItems_BatchUpdateReasonId");

            migrationBuilder.CreateTable(
                name: "BatchUpdateReasons",
                columns: table => new
                {
                    Id = table.Column<long>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Reason = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BatchUpdateReasons", x => x.Id);
                });

            migrationBuilder.AddForeignKey(
                name: "FK_BatchItems_BatchUpdateReasons_BatchUpdateReasonId",
                table: "BatchItems",
                column: "BatchUpdateReasonId",
                principalTable: "BatchUpdateReasons",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_BatchItems_BatchUpdateReasons_BatchUpdateReasonId",
                table: "BatchItems");

            migrationBuilder.DropTable(
                name: "BatchUpdateReasons");

            migrationBuilder.RenameColumn(
                name: "BatchUpdateReasonId",
                table: "BatchItems",
                newName: "CorrectionReasonId");

            migrationBuilder.RenameIndex(
                name: "IX_BatchItems_BatchUpdateReasonId",
                table: "BatchItems",
                newName: "IX_BatchItems_CorrectionReasonId");

            migrationBuilder.CreateTable(
                name: "CorrectionReasons",
                columns: table => new
                {
                    Id = table.Column<long>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Reason = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CorrectionReasons", x => x.Id);
                });

            migrationBuilder.AddForeignKey(
                name: "FK_BatchItems_CorrectionReasons_CorrectionReasonId",
                table: "BatchItems",
                column: "CorrectionReasonId",
                principalTable: "CorrectionReasons",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
