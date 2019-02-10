using System.Linq;

namespace Entities
{
    public partial class Batch
    {
        public int LocationQuantity(long locationId)
        {
            var location = this.Batch2Location.FirstOrDefault(x => x.LocationId == locationId);
            return location == null ? 0 : location.Quantity;
        }
    }
}