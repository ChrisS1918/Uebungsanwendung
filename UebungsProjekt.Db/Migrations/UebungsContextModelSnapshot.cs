﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using UebungsProjekt.Db;

namespace UebungsProjekt.Db.Migrations
{
    [DbContext(typeof(UebungsContext))]
    partial class UebungsContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.11")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("UebungApi.Addresses.Address", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Nummer")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Ort")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Plz")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Straße")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Addresses");
                });

            modelBuilder.Entity("UebungApi.Customers.Customer", b =>
                {
                    b.Property<string>("CustomerId")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("AcademicDegree")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Address")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Address2")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("BankAccountMandateReference")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("BankAccountNumber")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("BankAccountOwner")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("BankBIC")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("BankCode")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("BankIBAN")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("BankName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("City")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("CountryCode")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("Created")
                        .HasColumnType("datetime2");

                    b.Property<string>("CurrencyCode")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("CustomerAccount")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("CustomerNumber")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("CustomerType")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("DaysForPayment")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Email")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Fax")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("FirstName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("LastName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("LastUpdate")
                        .HasColumnType("datetime2");

                    b.Property<string>("Mobile")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("NewsletterOptin")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Organization")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PaymentType")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Phone")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Phone2")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Position")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Salutation")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("SecondaryAddress")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("SowPaymentNotice")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Tags")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Top")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("VatId")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Website")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ZipCode")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("CustomerId");

                    b.ToTable("Customers");
                });
#pragma warning restore 612, 618
        }
    }
}
