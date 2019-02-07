using System;
using System.Runtime.Serialization;

namespace Application.Models
{
    [DataContract]
    public class BatchUpdateReason
    {
        [DataMember(Name = "id")]
        public long Id { get; set; }

        [DataMember(Name = "reason")]
        public string Reason { get; set; }
    }
}