using System;
using QualityBytes.Core.Entity;

namespace UebungApi.Customers
{
    public class Customer : IEntityWithId<string>
    {
        public string Id => CUSTOMER_ID;
        public string CUSTOMER_ID { get; set; }
        public string CUSTOMER_NUMBER { get; set; }
        public string DAYS_FOR_PAYMENT { get; set; }
        public DateTime CREATED { get; set; }
        public string PAYMENT_TYPE { get; set; }
        public string BANK_NAME { get; set; }
        public string BANK_ACCOUNT_NUMBER { get; set; }
        public string BANK_CODE { get; set; }
        public string BANK_ACCOUNT_OWNER { get; set; }
        public string BANK_IBAN { get; set; }
        public string BANK_BIC { get; set; }
        public string BANK_ACCOUNT_MANDATE_REFERENCE { get; set; }
        public string SHOW_PAYMENT_NOTICE { get; set; }
        public string CUSTOMER_ACCOUNT { get; set; }
        public string CUSTOMER_TYPE { get; set; }
        public string TOP { get; set; }
        public string NEWSLETTER_OPTIN { get; set; }
        public string ORGANIZATION { get; set; }
        public string POSITION { get; set; }
        public string ACADEMIC_DEGREE { get; set; }
        public string SALUTATION { get; set; }
        public string FIRST_NAME { get; set; }
        public string LAST_NAME { get; set; }
        public string ADDRESS { get; set; }
        public string ADDRESS_2 { get; set; }
        public string ZIPCODE { get; set; }
        public string CITY { get; set; }
        public string COUNTRY_CODE { get; set; }
        public string SECONDARY_ADDRESS { get; set; }
        public string PHONE { get; set; }
        public string PHONE_2 { get; set; }
        public string FAX { get; set; }
        public string MOBILE { get; set; }
        public string EMAIL { get; set; }
        public string WEBSITE { get; set; }
        public string VAT_ID { get; set; }
        public string CURRENCY_CODE { get; set; }
        public DateTime LASTUPDATE { get; set; }
        public string TAGS { get; set; }
    }
}