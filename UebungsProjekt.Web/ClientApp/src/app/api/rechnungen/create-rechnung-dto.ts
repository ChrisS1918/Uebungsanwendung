import { Item } from "src/app/rechnungen/Rechnung";



export class CreateRechnungDto {
    constructor(
        public readonly yourcompany_companyname: string,
        public readonly yourcompany_zip: string,
        public readonly yourcompany_city: string,
        public readonly yourcompany_street: string,
        public readonly yourcompany_phone: string,
        public readonly yourcompany_fax: string,
        public readonly yourcompany_url: string,
        public readonly yourcompany_email: string,
        public readonly invoice_no: string,
        public readonly billto_name: string,
        public readonly billto_companyname: string,
        public readonly billto_customerid: string,
        public readonly billto_zip: string,
        public readonly billto_city: string,
        public readonly billto_street: string,
        public readonly billto_phone: string,
        public readonly payment_due: string,
        public readonly payment_terms: string,
        public readonly salesperson_name: string,
        public readonly delivery_date: string,
        public readonly delivery_method: string,
        public readonly delivery_method_terms: string,
        public readonly recipient_name: string,
        public readonly recipient_companyname: string,
        public readonly recipient_zip: string,
        public readonly recipient_city: string,
        public readonly recipient_street: string,
        public readonly recipient_phone: string,
        public readonly item: Item[],
        public readonly total_discount: string,
        public readonly total_sub: string,
        public readonly total_tax: string,
        public readonly total: string,
    ) { }

}

export class RootObject {
    mergeData: CreateRechnungDto[];
    template?: any;
    mergeSettings?: any;
}