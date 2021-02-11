using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace UebungsProjekt.Db.Migrations
{
    public partial class CustomerMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Customers",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CUSTOMER_ID = table.Column<string>(nullable: true),
                    CUSTOMER_NUMBER = table.Column<string>(nullable: true),
                    DAYS_FOR_PAYMENT = table.Column<string>(nullable: true),
                    CREATED = table.Column<DateTime>(nullable: false),
                    PAYMENT_TYPE = table.Column<string>(nullable: true),
                    BANK_NAME = table.Column<string>(nullable: true),
                    BANK_ACCOUNT_NUMBER = table.Column<string>(nullable: true),
                    BANK_CODE = table.Column<string>(nullable: true),
                    BANK_ACCOUNT_OWNER = table.Column<string>(nullable: true),
                    BANK_IBAN = table.Column<string>(nullable: true),
                    BANK_BIC = table.Column<string>(nullable: true),
                    BANK_ACCOUNT_MANDATE_REFERENCE = table.Column<string>(nullable: true),
                    SHOW_PAYMENT_NOTICE = table.Column<string>(nullable: true),
                    CUSTOMER_ACCOUNT = table.Column<string>(nullable: true),
                    CUSTOMER_TYPE = table.Column<string>(nullable: true),
                    TOP = table.Column<string>(nullable: true),
                    NEWSLETTER_OPTIN = table.Column<string>(nullable: true),
                    ORGANIZATION = table.Column<string>(nullable: true),
                    POSITION = table.Column<string>(nullable: true),
                    ACADEMIC_DEGREE = table.Column<string>(nullable: true),
                    SALUTATION = table.Column<string>(nullable: true),
                    FIRST_NAME = table.Column<string>(nullable: true),
                    LAST_NAME = table.Column<string>(nullable: true),
                    ADDRESS = table.Column<string>(nullable: true),
                    ADDRESS_2 = table.Column<string>(nullable: true),
                    ZIPCODE = table.Column<string>(nullable: true),
                    CITY = table.Column<string>(nullable: true),
                    COUNTRY_CODE = table.Column<string>(nullable: true),
                    SECONDARY_ADDRESS = table.Column<string>(nullable: true),
                    PHONE = table.Column<string>(nullable: true),
                    PHONE_2 = table.Column<string>(nullable: true),
                    FAX = table.Column<string>(nullable: true),
                    MOBILE = table.Column<string>(nullable: true),
                    EMAIL = table.Column<string>(nullable: true),
                    WEBSITE = table.Column<string>(nullable: true),
                    VAT_ID = table.Column<string>(nullable: true),
                    CURRENCY_CODE = table.Column<string>(nullable: true),
                    LASTUPDATE = table.Column<DateTime>(nullable: false),
                    TAGS = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Customers", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Customers");
        }
    }
}
