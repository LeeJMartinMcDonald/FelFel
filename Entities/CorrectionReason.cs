using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Entities
{
    [Table("CorrectionReasons")]

    public partial class CorrectionReason
    {
        public CorrectionReason()
        {
            BatchItems = new HashSet<BatchItem>();
        }

        public long Id { get; set; }
        public string Reason { get; set; }

        public ICollection<BatchItem> BatchItems { get; set; }
    }
}
