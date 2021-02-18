using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using QualityBytes.Core;
using UebungApi.Customers;
using UebungsProjekt.Customers.CreateCustomer;

namespace UebungsProjekt.Db.Customers
{
    public class CreateCustomerCommand : ICreateCustomerCommand
    {
        private readonly UebungsContext _db;
        public CreateCustomerCommand(UebungsContext db)
        {
            _db = db;
        }

        public async Task<IResult<Customer[]>> ExecuteAsync(List<CreateCustomerDto> dtos)
        {
            _db.RemoveRange(_db.Customers);
            var entities = dtos.Select(dto => new Customer
            {
                CustomerId = dto.CUSTOMER_ID,
                CustomerNumber = dto.CUSTOMER_NUMBER,
                DaysForPayment = dto.DAYS_FOR_PAYMENT,
                Created = dto.CREATED,
                PaymentType = dto.PAYMENT_TYPE,
                BankName = dto.BANK_NAME,
                BankAccountNumber = dto.BANK_ACCOUNT_NUMBER,
                BankCode = dto.BANK_CODE,
                BankAccountOwner = dto.BANK_ACCOUNT_OWNER,
                BankIBAN = dto.BANK_IBAN,
                BankBIC = dto.BANK_BIC,
                BankAccountMandateReference = dto.BANK_ACCOUNT_MANDATE_REFERENCE,
                SowPaymentNotice = dto.SHOW_PAYMENT_NOTICE,
                CustomerAccount = dto.CUSTOMER_ACCOUNT,
                CustomerType = dto.CUSTOMER_TYPE,
                Top = dto.TOP,
                NewsletterOptin = dto.NEWSLETTER_OPTIN,
                Organization = dto.ORGANIZATION,
                Position = dto.POSITION,
                AcademicDegree = dto.ACADEMIC_DEGREE,
                Salutation = dto.SALUTATION,
                FirstName = dto.FIRST_NAME,
                LastName = dto.LAST_NAME,
                Address = dto.ADDRESS,
                Address2 = dto.ADDRESS_2,
                ZipCode = dto.ZIPCODE,
                City = dto.CITY,
                CountryCode = dto.COUNTRY_CODE,
                SecondaryAddress = dto.SECONDARY_ADDRESS,
                Phone = dto.PHONE,
                Phone2 = dto.PHONE_2,
                Fax = dto.FAX,
                Mobile = dto.MOBILE,
                Email = dto.EMAIL,
                Website = dto.WEBSITE,
                VatId = dto.VAT_ID,
                CurrencyCode = dto.CURRENCY_CODE,
                LastUpdate = dto.LASTUPDATE,
                Tags = dto.TAGS,
            }).ToArray();

            await _db.AddRangeAsync(entities);
            return Result.For(entities);
        }
    }
}