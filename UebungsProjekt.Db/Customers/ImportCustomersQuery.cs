using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Newtonsoft.Json.Linq;
using QualityBytes.Core;
using QualityBytes.Core.Extensions;
using UebungApi.Customers;
using UebungApi.Customers.CreateCustomer;

namespace UebungsProjekt.Db.Customers
{
    /// <summary>
    /// Query für die Abfrage von mehreren Kunden-Datensätzen
    /// </summary>
    public class ImportCustomersQuery : IImportCustomersQuery
    {
        private static readonly HttpClient http = new HttpClient();
        public ImportCustomersQuery(IOptions<FastbillSettings> options)
        {
            options.Value.Username = "fastTest@tempr.email";
            options.Value.Password = "ac6c60f49f195c1f0d91dae6d1bd02790GFHWcg3MEg0uFiGHdkgohxrlY9FjokL";

            http.DefaultRequestHeaders.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Basic", Convert.ToBase64String(Encoding.UTF8.GetBytes(options.Value.Username + ':' + options.Value.Password)));
            http.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
        }

        public async Task<IResult<List<CreateCustomerDto>>> ExecuteAsync(CancellationToken cancellationToken)
        {
            var response = await http.PostAsync("https://my.fastbill.com/api/1.0/api.php?OFFSET=CUSTOMERS&=", new StringContent(@"{""SERVICE"": ""customer.get"" }", Encoding.UTF8, "application/json"));
            if(!response.IsSuccessStatusCode) {
                var error = JObject.Parse(await response.Content.ReadAsStringAsync());
                return error["RESPONSE"]["ERRORS"].Values<string>().Aggregate(Result.Empty<List<CreateCustomerDto>>(), (state, element) => state.AddErrorMessage(element));
            }
            var json = JObject.Parse(await response.Content.ReadAsStringAsync());
            return Result.For(json["RESPONSE"]["CUSTOMERS"].ToObject<List<CreateCustomerDto>>());
        }

        /// <summary>
        /// Gibt mehrere Kunden-Datensätze zurück
        /// </summary>
    }
}
