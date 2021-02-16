export interface Rechnung {
    yourcompany_companyname: string;
    yourcompany_zip: string;
    yourcompany_city: string;
    yourcompany_street: string;
    yourcompany_phone: string;
    yourcompany_fax: string;
    yourcompany_url: string;
    yourcompany_email: string;
    invoice_no: string;
    billto_name: string;
    billto_companyname: string;
    billto_customerid: string;
    billto_zip: string;
    billto_city: string;
    billto_street: string;
    billto_phone: string;
    payment_due: string;
    payment_terms: string;
    salesperson_name: string;
    delivery_date: string;
    delivery_method: string;
    delivery_method_terms: string;
    recipient_name: string;
    recipient_companyname: string;
    recipient_zip: string;
    recipient_city: string;
    recipient_street: string;
    recipient_phone: string;
    item: Item[];
    total_discount: string;
    total_sub: string;
    total_tax: string;
    total: string;
}

export class Item {
    qty: string;
    item_no: string;
    item_description: string;
    item_unitprice: string;
    item_discount: string;
    item_total: string;
}

//export class RootObject {
//    mergeData: MergeData[];
//    template?: any;
//    mergeSettings?: any;
//}
