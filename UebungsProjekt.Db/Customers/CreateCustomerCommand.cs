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

        public async Task<IResult<Customer[]>> ExecuteAsync(CreateCustomerDto[] dtos)
        {
            _db.RemoveRange(_db.Customers);
            var entities = dtos.Select(dto => new Customer
            {
                CUSTOMER_ID = dto.CUSTOMER_ID,
                CUSTOMER_NUMBER = dto.CUSTOMER_NUMBER,
                DAYS_FOR_PAYMENT = dto.DAYS_FOR_PAYMENT,
                CREATED = dto.CREATED,
                PAYMENT_TYPE = dto.PAYMENT_TYPE,
                BANK_NAME = dto.BANK_NAME,
                BANK_ACCOUNT_NUMBER = dto.BANK_ACCOUNT_NUMBER,
                BANK_CODE = dto.BANK_CODE,
                BANK_ACCOUNT_OWNER = dto.BANK_ACCOUNT_OWNER,
                BANK_IBAN = dto.BANK_IBAN,
                BANK_BIC = dto.BANK_BIC,
                BANK_ACCOUNT_MANDATE_REFERENCE = dto.BANK_ACCOUNT_MANDATE_REFERENCE,
                SHOW_PAYMENT_NOTICE = dto.SHOW_PAYMENT_NOTICE,
                CUSTOMER_ACCOUNT = dto.CUSTOMER_ACCOUNT,
                CUSTOMER_TYPE = dto.CUSTOMER_TYPE,
                TOP = dto.TOP,
                NEWSLETTER_OPTIN = dto.NEWSLETTER_OPTIN,
                ORGANIZATION = dto.ORGANIZATION,
                POSITION = dto.POSITION,
                ACADEMIC_DEGREE = dto.ACADEMIC_DEGREE,
                SALUTATION = dto.SALUTATION,
                FIRST_NAME = dto.FIRST_NAME,
                LAST_NAME = dto.LAST_NAME,
                ADDRESS = dto.ADDRESS,
                ADDRESS_2 = dto.ADDRESS_2,
                ZIPCODE = dto.ZIPCODE,
                CITY = dto.CITY,
                COUNTRY_CODE = dto.COUNTRY_CODE,
                SECONDARY_ADDRESS = dto.SECONDARY_ADDRESS,
                PHONE = dto.PHONE,
                PHONE_2 = dto.PHONE_2,
                FAX = dto.FAX,
                MOBILE = dto.MOBILE,
                EMAIL = dto.EMAIL,
                WEBSITE = dto.WEBSITE,
                VAT_ID = dto.VAT_ID,
                CURRENCY_CODE = dto.CURRENCY_CODE,
                LASTUPDATE = dto.LASTUPDATE,
                TAGS = dto.TAGS,
            }).ToArray();

            await _db.AddRangeAsync(entities);
            return Result.For(entities);
        }
    }
}