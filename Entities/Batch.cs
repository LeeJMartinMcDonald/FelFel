using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Entities
{
    [Table("Batches")]

    public partial class Batch
    {
        public Batch()
        {
            BatchItems = new HashSet<BatchItem>();
        }

        public long Id { get; set; }
        public DateTime CheckedInDate {get;set;}
        public DateTime ExpirationDate { get; set; }

        public Order Order { get; set; }
        public Product Product { get; set; }

        public ICollection<BatchItem> BatchItems { get; set; }

    }
}
