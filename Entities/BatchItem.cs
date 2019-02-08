using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Entities
{
    [Table("BatchItems")]

    public partial class BatchItem
    {
        public BatchItem()
        {
        }

        public long Id { get; set; }
        public int Quantity { get; set; }
        // TODO: Refactor - should be of type date
        public int Date { get; set; }

        public Location Location { get; set; }
        public Batch Batch { get; set; }
        public Customer Customer { get; set; }
        public BatchUpdateReason BatchUpdateReason { get; set;}
    }
}
