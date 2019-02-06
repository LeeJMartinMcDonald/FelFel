using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Data.Models;
using Entities;
using Microsoft.EntityFrameworkCore;

namespace Data.Queries
{
    public class BatchItemRepository : Repo<BatchItem>, IBatchItemRepository
    {
        public BatchItemRepository(ProjectEntities context) : base(context)
        {
        }

        public async Task<IEnumerable<BatchItem>> Get(int batchId)
        {
            return await _context.BatchItems
                .Include(x => x.Batch)
                .Where(x => x.Batch.Id == batchId)
                .ToListAsync()
                ;
        }
    }
}
