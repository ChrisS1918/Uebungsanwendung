using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using QualityBytes.Core;
using QualityBytes.Core.Query;

namespace UebungApi.Customers.ReadCustomers
{
    public interface IReadCustomersQuery : IAnyQuery
    {
        Task<IResult<List<Customer>>> ExecuteAsync(CancellationToken cancellationToken);
    }
}
