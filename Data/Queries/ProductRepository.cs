using System.Collections.Generic;
using System.Threading.Tasks;
using Data.Models;
using Entities;
using Microsoft.EntityFrameworkCore;

namespace Data.Queries
{
    public class ProductRepository : Repo<Product>, IProductRepository
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

        public async Task<Product> Get(long id)
        {
            return await _context.Products
                .FirstOrDefaultAsync(x => x.Id == id)
                ;
        }
    }
}
