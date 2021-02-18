using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace UebungsProjekt.Db.Migrations
{
    public partial class initialMigrations : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Addresses",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Ort = table.Column<string>(nullable: true),
                    Plz = table.Column<string>(nullable: true),
                    Straße = table.Column<string>(nullable: true),
                    Nummer = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Addresses", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Customers",
                columns: table => new
                {
                    CustomerId = table.Column<string>(nullable: false),
                    CustomerNumber = table.Column<string>(nullable: true),
                    DaysForPayment = table.Column<string>(nullable: true),
                    Created = table.Column<DateTime>(nullable: false),
                    PaymentType = table.Column<string>(nullable: true),
                    BankName = table.Column<string>(nullable: true),
                    BankAccountNumber = table.Column<string>(nullable: true),
                    BankCode = table.Column<string>(nullable: true),
                    BankAccountOwner = table.Column<string>(nullable: true),
                    BankIBAN = table.Column<string>(nullable: true),
                    BankBIC = table.Column<string>(nullable: true),
                    BankAccountMandateReference = table.Column<string>(nullable: true),
                    SowPaymentNotice = table.Column<string>(nullable: true),
                    CustomerAccount = table.Column<string>(nullable: true),
                    CustomerType = table.Column<string>(nullable: true),
                    Top = table.Column<string>(nullable: true),
                    NewsletterOptin = table.Column<string>(nullable: true),
                    Organization = table.Column<string>(nullable: true),
                    Position = table.Column<string>(nullable: true),
                    AcademicDegree = table.Column<string>(nullable: true),
                    Salutation = table.Column<string>(nullable: true),
                    FirstName = table.Column<string>(nullable: true),
                    LastName = table.Column<string>(nullable: true),
                    Address = table.Column<string>(nullable: true),
                    Address2 = table.Column<string>(nullable: true),
                    ZipCode = table.Column<string>(nullable: true),
                    City = table.Column<string>(nullable: true),
                    CountryCode = table.Column<string>(nullable: true),
                    SecondaryAddress = table.Column<string>(nullable: true),
                    Phone = table.Column<string>(nullable: true),
                    Phone2 = table.Column<string>(nullable: true),
                    Fax = table.Column<string>(nullable: true),
                    Mobile = table.Column<string>(nullable: true),
                    Email = table.Column<string>(nullable: true),
                    Website = table.Column<string>(nullable: true),
                    VatId = table.Column<string>(nullable: true),
                    CurrencyCode = table.Column<string>(nullable: true),
                    LastUpdate = table.Column<DateTime>(nullable: false),
                    Tags = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Customers", x => x.CustomerId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Addresses");

            migrationBuilder.DropTable(
                name: "Customers");
        }
    }
}
