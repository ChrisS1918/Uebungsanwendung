import { Type } from 'class-transformer';

export class Customer {
    CUSTOMER_ID:                    string;
    CUSTOMER_NUMBER:                string;
    DAYS_FOR_PAYMENT:               string;
    @Type(() => Date)
    CREATED:                        Date;
    PAYMENT_TYPE:                   string;
    BANK_NAME:                      string;
    BANK_ACCOUNT_NUMBER:            string;
    BANK_CODE:                      string;
    BANK_ACCOUNT_OWNER:             string;
    BANK_IBAN:                      string;
    BANK_BIC:                       string;
    BANK_ACCOUNT_MANDATE_REFERENCE: string;
    SHOW_PAYMENT_NOTICE:            string;
    CUSTOMER_ACCOUNT:               string;
    CUSTOMER_TYPE:                  string;
    TOP:                            string;
    NEWSLETTER_OPTIN:               string;
    ORGANIZATION:                   string;
    POSITION:                       string;
    ACADEMIC_DEGREE:                string;
    SALUTATION:                     string;
    FIRST_NAME:                     string;
    LAST_NAME:                      string;
    ADDRESS:                        string;
    ADDRESS_2:                      string;
    ZIPCODE:                        string;
    CITY:                           string;
    COUNTRY_CODE:                   string;
    SECONDARY_ADDRESS:              string;
    PHONE:                          string;
    PHONE_2:                        string;
    FAX:                            string;
    MOBILE:                         string;
    EMAIL:                          string;
    WEBSITE:                        string;
    VAT_ID:                         string;
    CURRENCY_CODE:                  string;
    @Type(() => Date)
    LASTUPDATE:                     Date;
    TAGS:                           string;
}