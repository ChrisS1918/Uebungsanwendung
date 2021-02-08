using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UebungApi.Addresses
{
    public class CreateAddressDto
    {
        public string Ort { get; set; }
        public string Plz { get; set; }
        public string Straße { get; set; }
        public string Nummer { get; set; }
    }
}
