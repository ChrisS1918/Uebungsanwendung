using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using QualityBytes.Core;
using QualityBytes.Core.UseCase;

namespace UebungApi.Customers.ReadCustomers
{
    public interface IReadCustomersUseCase : IAnyUseCase
    {
        Task<IResult<List<Customer>>> ExecuteAsync(CancellationToken cancellationToken);
    }
}
