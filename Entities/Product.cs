using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Entities
{
    [Table("Products")]

    public partial class Product
    {
        public Product()
        {
            Batches = new HashSet<Batch>();
            Orders = new HashSet<Order>();
        }

        public long Id { get; set; }
        public string Name { get; set; }

        public ICollection<Batch> Batches { get; set; }
        public ICollection<Order> Orders { get; set; }
    }
}
