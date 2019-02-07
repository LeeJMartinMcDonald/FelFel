using System.Collections.Generic;
using System.Threading.Tasks;
using Data.Models;
using Entities;
using Microsoft.EntityFrameworkCore;

namespace Data.Queries
{
    public class BatchUpdateReasonRepository : Repo<BatchUpdateReason>, IBatchUpdateReasonRepository
    {
        public BatchUpdateReasonRepository(ProjectEntities context) : base(context)
        {
        }

        public async Task<IEnumerable<BatchUpdateReason>> Get()
        {
            return await _context.BatchUpdateReasons
                .ToListAsync()
                ;
        }
        public async Task<BatchUpdateReason> Get(long id)
        {
            return await _context.BatchUpdateReasons
                .FirstOrDefaultAsync(x => x.Id == id)
                ;
        }
    }
}
