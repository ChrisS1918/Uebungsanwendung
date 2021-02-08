using QualityBytes.Core;
using QualityBytes.Core.Command;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using UebungApi.Addresses;

namespace UebungsProjekt.Addresses.CreateAddress
{
    public interface ICreateAddressCommand : IAnyCommand
    {
        Task<IResult<Address>> ExecuteAsync(CreateAddressDto dto);
    }
}
