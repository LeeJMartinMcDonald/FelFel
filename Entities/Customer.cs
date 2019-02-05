using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Entities
{
    [Table("Customers")]

    public partial class Customer
    {
        public Customer()
        {
            BatchItems = new HashSet<BatchItem>();
        }

        public long Id { get; set; }
        public string Name { get; set; }

        public ICollection<BatchItem> BatchItems { get; set; }
    }
}
