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
            BatchItems = new HashSet<BatchItem>();
        }

        public long Id { get; set; }
        public string Name { get; set; }

        public ICollection<BatchItem> BatchItems { get; set; }
    }
}
