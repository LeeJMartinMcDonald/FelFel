﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Entities
{
    [Table("Batches")]

    public partial class Batch
    {
        public Batch()
        {
            Batch2Location = new HashSet<Batch2Location>();
            BatchItems = new HashSet<BatchItem>();
        }

        public long Id { get; set; }
        public DateTime CheckedInDate { get; set; }
        public DateTime ExpirationDate { get; set; }
        public int ExpiringTime { get; set; }

        public Order Order { get; set; }
        public Product Product { get; set; }

        public ICollection<Batch2Location> Batch2Location { get; set; }
        public ICollection<BatchItem> BatchItems { get; set; }
    }
}
