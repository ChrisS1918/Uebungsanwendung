using QualityBytes.Core;
using QualityBytes.Core.Extensions;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using UebungApi.Addresses;

namespace UebungsProjekt.Addresses.CreateAddress
{
    public class CreateAddressUseCase : ICreateAddressUseCase
    {
        private readonly ICreateAddressCommand _command;
        private readonly IUnitOfWork _unitOfWork;

        public CreateAddressUseCase(ICreateAddressCommand command, IUnitOfWork unitOfWork)
        {
            _command = command;
            _unitOfWork = unitOfWork;
        }

        public Task<IResult<Address>> ExecuteAsync(CreateAddressDto dto)
        {
            using var transaction = _unitOfWork.BeginTransaction();
            return _command.ExecuteAsync(dto).TapAsync(_ => transaction.CommitAsync());
        }
    }
}
