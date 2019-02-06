using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Entities;

namespace Data.Queries
{
    public interface IBatchItemRepository : IRepo<BatchItem>
    {
        Task<IEnumerable<BatchItem>> Get(int batchId);
    }
}