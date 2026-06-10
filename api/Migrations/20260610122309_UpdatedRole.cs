using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace api.Migrations
{
    /// <inheritdoc />
    public partial class UpdatedRole : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "2d21f9ea-3ec1-4ffe-bfc1-b08e573996d9");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "faa93770-e316-4426-a3f7-06cb15c3d23e");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "11e529c0-fa9b-4b98-99d2-615f785dfb71", null, "Admin", "ADMIN" },
                    { "e8be9144-a4fd-4bb2-b7aa-ea86577bfdc8", null, "User", "USER" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "11e529c0-fa9b-4b98-99d2-615f785dfb71");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "e8be9144-a4fd-4bb2-b7aa-ea86577bfdc8");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "2d21f9ea-3ec1-4ffe-bfc1-b08e573996d9", null, "User", "USER" },
                    { "faa93770-e316-4426-a3f7-06cb15c3d23e", null, "Admin", "ADMIN" }
                });
        }
    }
}
