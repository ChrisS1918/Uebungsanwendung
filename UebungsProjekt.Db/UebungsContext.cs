using Microsoft.EntityFrameworkCore;
using QualityBytes.Core;
using QualityBytes.Core.Db;
using System;
using System.Collections.Generic;
using System.Text;
using UebungApi.Addresses;
using UebungApi.Customers;

namespace UebungsProjekt.Db
{
    public class UebungsContext : DbContextBase
    {
        public UebungsContext(DbContextOptions options, ICurrentUserIdProvider currentUserIdProvider = null) : base(options, currentUserIdProvider)
        {
        }

        public DbSet<Address> Addresses { get; set; }
        public DbSet<Customer> Customers { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.ApplyConfigurationsFromAssembly(typeof(UebungsContext).Assembly);
        }
    }
}
