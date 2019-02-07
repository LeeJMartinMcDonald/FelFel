using System;
using System.Runtime.Serialization;

namespace Application.Models
{
    [DataContract]
    public class Batch
    {
        [DataMember(Name = "id")]
        public long Id { get; set; }

        [DataMember(Name = "checkedInDate")]
        public DateTime CheckedInDate { get; set; }

        [DataMember(Name = "expirationDate")]
        public DateTime ExpirationDate { get; set; }

        [DataMember(Name = "expiringTime")]
        public int ExpiringTime { get; set; }

        [DataMember(Name = "orderId")]
        public int OrderId { get; set; }

        [DataMember(Name = "product")]
        public string Product { get; set; }

        [DataMember(Name = "productId")]
        public int ProductId { get; set; }

        [DataMember(Name = "quantity")]
        public int Quantity { get; set; }
    }
}