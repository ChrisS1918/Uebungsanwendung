using System;
using QualityBytes.Core.Entity;

namespace UebungApi.Customers
{
    public class Customer : IEntityWithId<string>
    {
        public string Id => CustomerId;
        public string CustomerId { get; set; }
        public string CustomerNumber { get; set; }
        public string DaysForPayment { get; set; }
        public DateTime Created { get; set; }
        public string PaymentType { get; set; }
        public string BankName { get; set; }
        public string BankAccountNumber { get; set; }
        public string BankCode { get; set; }
        public string BankAccountOwner { get; set; }
        public string BankIBAN { get; set; }
        public string BankBIC { get; set; }
        public string BankAccountMandateReference { get; set; }
        public string SowPaymentNotice { get; set; }
        public string CustomerAccount { get; set; }
        public string CustomerType { get; set; }
        public string Top { get; set; }
        public string NewsletterOptin { get; set; }
        public string Organization { get; set; }
        public string Position { get; set; }
        public string AcademicDegree { get; set; }
        public string Salutation { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Address { get; set; }
        public string Address2 { get; set; }
        public string ZipCode { get; set; }
        public string City { get; set; }
        public string CountryCode { get; set; }
        public string SecondaryAddress { get; set; }
        public string Phone { get; set; }
        public string Phone2 { get; set; }
        public string Fax { get; set; }
        public string Mobile { get; set; }
        public string Email { get; set; }
        public string Website { get; set; }
        public string VatId { get; set; }
        public string CurrencyCode { get; set; }
        public DateTime LastUpdate { get; set; }
        public string Tags { get; set; }
    }
}