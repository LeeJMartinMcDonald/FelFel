using System;
using System.Runtime.Serialization;

namespace Application.Models
{
    [DataContract]
    public class BatchNew : Batch
    {
        [DataMember(Name = "quantity")]
        public int Quantity { get; set; }
    }
}