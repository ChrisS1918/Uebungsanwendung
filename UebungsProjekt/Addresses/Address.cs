using QualityBytes.Core.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UebungApi.Addresses
{
    public class Address : IEntityWithId<int>
    {
        public int Id { get; set; }
        public string Ort { get; set; }
        public string Plz { get; set; }
        public string Straße { get; set; }
        public string Nummer { get; set; }
    }
}
