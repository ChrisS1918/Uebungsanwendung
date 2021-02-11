using System.Threading.Tasks;
using QualityBytes.Core;
using UebungApi.Customers;
using UebungsProjekt.Customers.CreateCustomer;

namespace UebungsProjekt.Db.Customers
{
    public class CreateCustomerCommand : ICreateCustomerCommand
    {
        private readonly UebungsContext _db;
        Customer[] entities;
        public CreateCustomerCommand(UebungsContext db)
        {
            _db = db;
        }

        public async Task<IResult<Customer[]>> ExecuteAsync(CreateCustomerDto[] dtos)
        {
            
            for (int i = 0; i < dtos.Length; i++)
            {
                this.entities[i] = new Customer
            {
                CUSTOMER_ID = dtos[i].CUSTOMER_ID,
                CUSTOMER_NUMBER = dtos[i].CUSTOMER_NUMBER,
                DAYS_FOR_PAYMENT = dtos[i].DAYS_FOR_PAYMENT,
                CREATED = dtos[i].CREATED,
                PAYMENT_TYPE = dtos[i].PAYMENT_TYPE,
                BANK_NAME = dtos[i].BANK_NAME,
                BANK_ACCOUNT_NUMBER = dtos[i].BANK_ACCOUNT_NUMBER,
                BANK_CODE = dtos[i].BANK_CODE,
                BANK_ACCOUNT_OWNER = dtos[i].BANK_ACCOUNT_OWNER,
                BANK_IBAN = dtos[i].BANK_IBAN,
                BANK_BIC = dtos[i].BANK_BIC,
                BANK_ACCOUNT_MANDATE_REFERENCE = dtos[i].BANK_ACCOUNT_MANDATE_REFERENCE,
                SHOW_PAYMENT_NOTICE = dtos[i].SHOW_PAYMENT_NOTICE,
                CUSTOMER_ACCOUNT = dtos[i].CUSTOMER_ACCOUNT,
                CUSTOMER_TYPE = dtos[i].CUSTOMER_TYPE,
                TOP = dtos[i].TOP,
                NEWSLETTER_OPTIN = dtos[i].NEWSLETTER_OPTIN,
                ORGANIZATION = dtos[i].ORGANIZATION,
                POSITION = dtos[i].POSITION,
                ACADEMIC_DEGREE = dtos[i].ACADEMIC_DEGREE,
                SALUTATION = dtos[i].SALUTATION,
                FIRST_NAME = dtos[i].FIRST_NAME,
                LAST_NAME = dtos[i].LAST_NAME,
                ADDRESS = dtos[i].ADDRESS,
                ADDRESS_2 = dtos[i].ADDRESS_2,
                ZIPCODE = dtos[i].ZIPCODE,
                CITY = dtos[i].CITY,
                COUNTRY_CODE = dtos[i].COUNTRY_CODE,
                SECONDARY_ADDRESS = dtos[i].SECONDARY_ADDRESS,
                PHONE = dtos[i].PHONE,
                PHONE_2 = dtos[i].PHONE_2,
                FAX = dtos[i].FAX,
                MOBILE = dtos[i].MOBILE,
                EMAIL = dtos[i].EMAIL,
                WEBSITE = dtos[i].WEBSITE,
                VAT_ID = dtos[i].VAT_ID,
                CURRENCY_CODE = dtos[i].CURRENCY_CODE,
                LASTUPDATE = dtos[i].LASTUPDATE,
                TAGS = dtos[i].TAGS,
            };
            }

            await _db.AddAsync(entities);
            return Result.For(entities);
        }
    }
}