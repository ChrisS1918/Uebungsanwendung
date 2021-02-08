using Microsoft.EntityFrameworkCore;
using QualityBytes.Core;
using QualityBytes.Core.Db;
using System;
using System.Collections.Generic;
using System.Text;
using UebungApi.Addresses;

namespace UebungsProjekt.Db
{
    public class UebungsContext : DbContextBase
    {
        public UebungsContext(DbContextOptions options, ICurrentUserIdProvider currentUserIdProvider = null) : base(options, currentUserIdProvider)
        {
        }

        public DbSet<Address> Addresses { get; set; }
    }
}
