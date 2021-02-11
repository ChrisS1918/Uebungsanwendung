using QualityBytes.Core;
using QualityBytes.Core.Extensions;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using UebungApi.Customers;

namespace UebungsProjekt.Customers.CreateCustomer
{
    public class CreateCustomerUseCase : ICreateCustomerUseCase
    {
        private readonly ICreateCustomerCommand _command;
        private readonly IUnitOfWork _unitOfWork;

        public CreateCustomerUseCase(ICreateCustomerCommand command, IUnitOfWork unitOfWork)
        {
            _command = command;
            _unitOfWork = unitOfWork;
        }

        public Task<IResult<Customer[]>> ExecuteAsync(CreateCustomerDto[] dtos)
        {
            using var transaction = _unitOfWork.BeginTransaction();
            return _command.ExecuteAsync(dtos).TapAsync(_ => transaction.CommitAsync());
        }
    }
}
