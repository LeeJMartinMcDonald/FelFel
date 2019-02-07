using System.Threading.Tasks;
using Data.Models;
using Microsoft.EntityFrameworkCore;

namespace Data.Queries
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly ProjectEntities _context;
        private IBatchRepository _batchRepository;
        private IBatchItemRepository _batchItemRepository;
        private IBatchUpdateReasonRepository _batchUpdateReasonRepository;

        public UnitOfWork(
            ProjectEntities context
        )
        {
            _context = context;
        }

        public IBatchRepository BatchRepository => _batchRepository ?? new BatchRepository(_context);
        public IBatchItemRepository BatchItemRepository => _batchItemRepository ?? new BatchItemRepository(_context);
        public IBatchUpdateReasonRepository BatchUpdateReasonRepository => _batchUpdateReasonRepository ?? new BatchUpdateReasonRepository(_context);

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