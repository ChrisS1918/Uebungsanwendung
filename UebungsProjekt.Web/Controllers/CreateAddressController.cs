using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UebungApi.Addresses;
using UebungsProjekt.Addresses.CreateAddress;
using QualityBytes.Core.Web.Extensions;

namespace UebungApi.Controllers
{
    [ApiController]
    public class CreateAddressController : ControllerBase
    {
        private readonly ICreateAddressUseCase _useCase;

        public CreateAddressController(ICreateAddressUseCase useCase)
        {
            _useCase = useCase;
        }

        [HttpPost("api/address")]
        public async Task<IActionResult> PostAsync(CreateAddressDto dto)
        {
            var result = await _useCase.ExecuteAsync(dto);
            return result.ToCreatedResult();
        }
    }
}
