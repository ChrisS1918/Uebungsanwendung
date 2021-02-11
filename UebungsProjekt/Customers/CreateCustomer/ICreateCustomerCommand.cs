using QualityBytes.Core;
using QualityBytes.Core.Command;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using UebungApi.Customers;

namespace UebungsProjekt.Customers.CreateCustomer
{
    public interface ICreateCustomerCommand : IAnyCommand
    {
        Task<IResult<Customer[]>> ExecuteAsync(CreateCustomerDto[] dtos);
    }
}
