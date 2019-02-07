using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Entities;

namespace Data.Queries
{
    public interface IProductRepository : IRepo<Product>
    {
        Task<IEnumerable<Product>> Get();
    }
}