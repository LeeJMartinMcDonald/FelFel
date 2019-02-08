using System;
using System.Runtime.Serialization;

namespace Application.Models
{
    [DataContract]
    public class Location
    {
        [DataMember(Name = "id")]
        public long Id { get; set; }

        [DataMember(Name = "name")]
        public string Name { get; set; }

        [DataMember(Name = "quantity")]
        public int Quantity { get; set; }
    }
}