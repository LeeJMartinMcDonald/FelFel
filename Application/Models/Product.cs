using System;
using System.Runtime.Serialization;

namespace Application.Models
{
    [DataContract]
    public class Product
    {
        [DataMember(Name = "id")]
        public long Id { get; set; }

        [DataMember(Name = "name")]
        public String Name { get; set; }
    }
}