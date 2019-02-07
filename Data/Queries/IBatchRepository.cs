using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Entities;

namespace Data.Queries
{
    public interface IBatchRepository : IRepo<Batch>
    {
        Task<Batch> GetBatch(long id);
        Task<IEnumerable<Batch>> Get();
    }
}