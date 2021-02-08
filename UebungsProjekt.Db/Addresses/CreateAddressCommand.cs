using QualityBytes.Core;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using UebungApi.Addresses;
using UebungsProjekt.Addresses.CreateAddress;

namespace UebungsProjekt.Db.Addresses
{
    public class CreateAddressCommand : ICreateAddressCommand
    {
        private readonly UebungsContext _db;

        public CreateAddressCommand(UebungsContext db)
        {
            _db = db;
        }

        public async Task<IResult<Address>> ExecuteAsync(CreateAddressDto dto)
        {
            var entity = new Address {
                Nummer = dto.Nummer,
                Ort = dto.Ort,
                Plz = dto.Plz,
                Straße = dto.Straße
            };

            await _db.AddAsync(entity);
            return Result.For(entity);
        }
    }
}
