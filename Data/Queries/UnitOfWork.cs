using System.Threading.Tasks;
using Data.Models;
using Microsoft.EntityFrameworkCore;

namespace Data.Queries
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly ProjectEntities _context;

        public UnitOfWork(
            ProjectEntities context,
            IBatchRepository batchRepository,
            IBatchItemRepository batchItemRepository,
            IBatchUpdateReasonRepository BatchUpdateReasonRepository
        )
        {
            // TODO: Refactor - remove setting of new repositories in the constructor - move to in the get methods of each - remove injection
            _context = context;
            BatchRepository = new BatchRepository(context);
            BatchItemRepository = new BatchItemRepository(context);
            BatchUpdateReasonRepository = new BatchUpdateReasonRepository(context);
        }

        public IBatchRepository BatchRepository { get; }
        public IBatchItemRepository BatchItemRepository { get; }
        public IBatchUpdateReasonRepository BatchUpdateReasonRepository { get; }

        public int Save()
        {
            try
            {
                return _context.SaveChanges();
            }
            catch (DbUpdateException databaseException)
            {
                foreach (var entry in databaseException.Entries)
                {
                    //log exception
                }

                return 0;
            }
        }

        public async Task<int> SaveAsync()
        {
            try
            {
                return await _context.SaveChangesAsync();
            }
            catch (DbUpdateException databaseException)
            {
                foreach (var entry in databaseException.Entries)
                {
                    //log exception
                }

                return 0;
            }
        }
    }
}