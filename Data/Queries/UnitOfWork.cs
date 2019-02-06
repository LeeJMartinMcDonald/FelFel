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
            IBatchItemRepository batchItemRepository
        )
        {
            _context = context;
            BatchRepository = batchRepository;
            BatchItemRepository = batchItemRepository;
        }

        public IBatchRepository BatchRepository { get; }
        public IBatchItemRepository BatchItemRepository { get; }

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