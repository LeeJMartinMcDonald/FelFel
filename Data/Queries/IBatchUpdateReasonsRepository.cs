using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Entities;

namespace Data.Queries
{
    public interface IBatchUpdateReasonRepository : IRepo<BatchUpdateReason>
    {
        Task<IEnumerable<BatchUpdateReason>> Get();
    }
}