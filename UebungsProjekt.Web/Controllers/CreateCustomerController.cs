using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using QualityBytes.Core.Web.Extensions;
using UebungApi.Customers;
using UebungsProjekt.Customers.CreateCustomer;

namespace UebungsProjekt.Web.Controllers.kunden
{
    [ApiController]
    public class CreateCustomerController : ControllerBase
    {
        private readonly ICreateCustomerUseCase _useCase;

        public CreateCustomerController(ICreateCustomerUseCase useCase)
        {
            _useCase = useCase;
        }


        [HttpPost("api/kunden")]
        public async Task<IActionResult> PostAsync(CreateCustomerDto[] dtos)
        {
            var result = await _useCase.ExecuteAsync(dtos);
            if(!result.Success)
            {
                return BadRequest();
            }
            return Ok();
        }
    }
}