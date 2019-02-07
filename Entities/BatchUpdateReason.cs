using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Entities
{
    [Table("BatchUpdateReasons")]

    public partial class BatchUpdateReason
    {
        public BatchUpdateReason()
        {
            BatchItems = new HashSet<BatchItem>();
        }

        public long Id { get; set; }
        public string Reason { get; set; }

        public ICollection<BatchItem> BatchItems { get; set; }
    }
}
