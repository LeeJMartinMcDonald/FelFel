using System.Collections.Generic;
using System.Threading.Tasks;
using Data.Models;
using Entities;
using Microsoft.EntityFrameworkCore;

namespace Data.Queries
{
    public class ProductRepository : Repo<Batch>, IProductRepository
    {
        public ProductRepository(ProjectEntities context) : base(context)
        {
        }

        public async Task<IEnumerable<Product>> Get()
        {
            return await _context.Products
                .ToListAsync()
                ;
        }
    }
}
