using System.Linq;

namespace Entities
{
    public partial class Location
    {
        public int BatchQuantity(long batchId)
        {
            var batch = this.Batch2Location.FirstOrDefault(x => x.BatchId == batchId);
            return batch == null ? 0 : batch.Quantity;
        }
    }
}