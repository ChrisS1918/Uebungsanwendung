using QualityBytes.Core;
using QualityBytes.Core.Extensions;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using UebungApi.Customers;
using UebungApi.Customers.CreateCustomer;

namespace UebungsProjekt.Customers.CreateCustomer
{
    public class CreateCustomerUseCase : ICreateCustomerUseCase
    {
        private readonly ICreateCustomerCommand _command;
        private readonly IImportCustomersQuery _query;
        private readonly IUnitOfWork _unitOfWork;

        public CreateCustomerUseCase(ICreateCustomerCommand command, IUnitOfWork unitOfWork, IImportCustomersQuery query)
        {
            _query = query;
            _command = command;
            _unitOfWork = unitOfWork;
        }

        public async Task<IResult> ExecuteAsync(CancellationToken cancellationToken)
        {
            var dtos = await _query.ExecuteAsync(cancellationToken);
            if(!dtos.Success) {
                return dtos.WithoutData();
            }
            using var transaction = _unitOfWork.BeginTransaction();
            return await _command.ExecuteAsync(dtos.Data).TapAsync(_ => transaction.CommitAsync()).WithoutDataAsync();
        }
    }
}
