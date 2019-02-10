using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Entities
{
    [Table("Locations")]

    public partial class Location
    {
        public Location()
        {
            Batch2Location = new HashSet<Batch2Location>();
            BatchItems = new HashSet<BatchItem>();
        }

        public long Id { get; set; }
        public string Name { get; set; }

        public ICollection<Batch2Location> Batch2Location { get; set; }
        public ICollection<BatchItem> BatchItems { get; set; }
    }
}
