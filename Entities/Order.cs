using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Entities
{
    [Table("Orders")]

    public partial class Order
    {
        public Order()
        {
            Batches = new HashSet<Batch>();
        }

        public long Id { get; set; }
        public DateTime Date { get; set; }
        public int Quantity { get; set; }

        public Product Product { get; set; }
        public Supplier Supplier { get; set; }

        public ICollection<Batch> Batches { get; set; }
    }
}
