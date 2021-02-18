using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using QualityBytes.Core;
using QualityBytes.Core.Db.Filtering;
using QualityBytes.Core.Db.Query;
using QualityBytes.Core.Paging;
using UebungApi.Customers;
using UebungApi.Customers.ReadCustomers;

namespace UebungsProjekt.Db.Customers
{
    /// <summary>
    /// Query für die Abfrage von mehreren Kunden-Datensätzen
    /// </summary>
    public class ReadCustomersQuery : IReadCustomersQuery
    {
        private readonly UebungsContext _db;

        public ReadCustomersQuery(
            UebungsContext db
            )
        {
            _db = db;
        }

        /// <summary>
        /// Gibt mehrere Kunden-Datensätze zurück
        /// </summary>
        public async Task<IResult<List<Customer>>> ExecuteAsync(CancellationToken cancellationToken)
        {
            var query = _db.Customers
                .OrderBy(x => x.Organization.ToLower())
                .AsQueryable();
            return Result.For(await query.ToListAsync());
        }
    }
}
