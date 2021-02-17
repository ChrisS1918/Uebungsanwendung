using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using QualityBytes.Core;
using QualityBytes.Core.Extensions;
using QualityBytes.Core.Paging;

namespace UebungApi.Customers.ReadCustomers
{
    /// <summary>
    /// UseCase für die Abfrage von mehreren Kunden-Datensätzen
    /// </summary>
    public class ReadCustomersUseCase : IReadCustomersUseCase
    {
        private readonly IReadCustomersQuery _query;

        public ReadCustomersUseCase(IReadCustomersQuery query)
        {
            _query = query;
        }


        public Task<IResult<List<Customer>>> ExecuteAsync(CancellationToken cancellationToken = default)
        {
            return _query.ExecuteAsync(cancellationToken);
        }

        /// <summary>
        /// Führt die Geschäftslogik zum Abfragen mehrerer Kunden-Datensätze aus
        /// </summary>


    }
}
