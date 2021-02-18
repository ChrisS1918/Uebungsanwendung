using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using QualityBytes.Core.Paging;
using QualityBytes.Core.Web.Extensions;
using UebungApi.Customers;
using UebungApi.Customers.ReadCustomers;

namespace UebungsProjekt.Web.Controllers.kunden
{
    /// <summary>
    /// Controller für die Abfrage von mehreren Kunden-Datensätzen
    /// </summary>
    [ApiController]
    public class ReadCustomersController : ControllerBase
    {
        private readonly IReadCustomersUseCase _useCase;

        public ReadCustomersController(IReadCustomersUseCase useCase)
        {
            _useCase = useCase;
        }

        /// <summary>
        /// Gibt eine Liste von Kunden-Datensätzen zurück
        /// </summary>
        [HttpGet("api/kunden")]
        public async Task<ActionResult<List<Customer>>> GetAsync(CancellationToken cancellationToken)
        {
            return await _useCase.ExecuteAsync(cancellationToken)
                .ToActionResultAsync();
        }
    }
}
