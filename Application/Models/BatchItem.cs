﻿using System;
using System.Runtime.Serialization;

namespace Application.Models
{
    [DataContract]
    public class BatchItem
    {
        [DataMember(Name = "id")]
        public long Id { get; set; }

        [DataMember(Name = "quantity")]
        public int Quantity { get; set; }
    }
}