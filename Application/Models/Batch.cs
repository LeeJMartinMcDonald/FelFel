using System;
using System.Runtime.Serialization;

namespace Application.Models
{
    [DataContract]
    public class Batch
    {
        [DataMember(Name = "Id")]
        public int Id { get; set; }

        [DataMember(Name = "CheckedInDate")]
        public DateTime CheckedInDate { get; set; }

        [DataMember(Name = "ExpirationDate")]
        public DateTime ExpirationDate { get; set; }

        [DataMember(Name = "ExpiringTime")]
        public int ExpiringTime { get; set; }

        [DataMember(Name = "OrderId")]
        public int OrderId { get; set; }

        [DataMember(Name = "ProductId")]
        public int ProductId { get; set; }
    }
}