using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Entities;

namespace Data.Queries
{
    public interface ILocationRepository : IRepo<Location>
    {
        Task<IEnumerable<Location>> Get();
        Task<Location> Get(long id);

    }
}