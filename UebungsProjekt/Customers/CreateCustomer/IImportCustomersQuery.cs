using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using QualityBytes.Core;
using QualityBytes.Core.Query;

namespace UebungApi.Customers.CreateCustomer
{
    public interface IImportCustomersQuery : IAnyQuery
    {
        Task<IResult<List<CreateCustomerDto>>> ExecuteAsync(CancellationToken cancellationToken);
    }
}
