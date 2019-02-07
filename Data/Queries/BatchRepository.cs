using System.Collections.Generic;
using System.Threading.Tasks;
using Data.Models;
using Entities;
using Microsoft.EntityFrameworkCore;

namespace Data.Queries
{
    public class BatchRepository : Repo<Batch>, IBatchRepository
    {
        public BatchRepository(ProjectEntities context) : base(context)
        {
        }

        public async Task<IEnumerable<Batch>> Get()
        {
            return await _context.Batches
                .Include(x => x.BatchItems)
                .Include(x => x.Product)
                .ToListAsync()
                ;
        }

        public async Task<Batch> GetBatch(long id)
        {
            return await _context.Batches
                .Include(x => x.BatchItems)
                .FirstOrDefaultAsync(x => x.Id == id)
                ;
        }
    }
}
