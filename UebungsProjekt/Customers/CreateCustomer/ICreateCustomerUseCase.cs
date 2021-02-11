using QualityBytes.Core;
using QualityBytes.Core.UseCase;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using UebungApi.Customers;

namespace UebungsProjekt.Customers.CreateCustomer
{
    public interface ICreateCustomerUseCase : IAnyUseCase
    {
        Task<IResult<Customer[]>> ExecuteAsync(CreateCustomerDto[] dtos);
    }
}

