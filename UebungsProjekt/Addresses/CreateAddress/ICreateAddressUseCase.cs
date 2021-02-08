using QualityBytes.Core;
using QualityBytes.Core.UseCase;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using UebungApi.Addresses;

namespace UebungsProjekt.Addresses.CreateAddress
{
    public interface ICreateAddressUseCase : IAnyUseCase
    {
        Task<IResult<Address>> ExecuteAsync(CreateAddressDto dto);
    }
}
