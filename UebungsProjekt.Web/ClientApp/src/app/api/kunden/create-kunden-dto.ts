export class CreateKundenDto {
    constructor(
    private readonly CUSTOMER_ID:                    string,
    private readonly CUSTOMER_NUMBER:                string,
    private readonly DAYS_FOR_PAYMENT:               string,
    private readonly CREATED:                        Date,
    private readonly PAYMENT_TYPE:                   string,
    private readonly BANK_NAME:                      string,
    private readonly BANK_ACCOUNT_NUMBER:            string,
    private readonly BANK_CODE:                      string,
    private readonly BANK_ACCOUNT_OWNER:             string,
    private readonly BANK_IBAN:                      string,
    private readonly BANK_BIC:                       string,
    private readonly BANK_ACCOUNT_MANDATE_REFERENCE: string,
    private readonly SHOW_PAYMENT_NOTICE:            string,
    private readonly CUSTOMER_ACCOUNT:               string,
    private readonly CUSTOMER_TYPE:                  string,
    private readonly TOP:                            string,
    private readonly NEWSLETTER_OPTIN:               string,
    private readonly ORGANIZATION:                   string,
    private readonly POSITION:                       string,
    private readonly ACADEMIC_DEGREE:                string,
    private readonly SALUTATION:                     string,
    private readonly FIRST_NAME:                     string,
    private readonly LAST_NAME:                      string,
    private readonly ADDRESS:                        string,
    private readonly ADDRESS_2:                      string,
    private readonly ZIPCODE:                        string,
    private readonly CITY:                           string,
    private readonly COUNTRY_CODE:                   string,
    private readonly SECONDARY_ADDRESS:              string,
    private readonly PHONE:                          string,
    private readonly PHONE_2:                        string,
    private readonly FAX:                            string,
    private readonly MOBILE:                         string,
    private readonly EMAIL:                          string,
    private readonly WEBSITE:                        string,
    private readonly VAT_ID:                         string,
    private readonly CURRENCY_CODE:                  string,
    private readonly LASTUPDATE:                     Date,
    private readonly TAGS:                           string
    ) { }
}



