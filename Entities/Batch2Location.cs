using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Entities
{
    [Table("Batch2Location")]

    public partial class Batch2Location
    {
        public Batch2Location()
        {
        }

        public int Quantity { get; set; }

        public long BatchId { get; set; }
        public long LocationId { get; set; }

        public Batch Batch { get; set; }
        public Location Location { get; set; }
    }
}
