using System.Collections.Generic;
using System.Threading.Tasks;

namespace Data.Queries
{
    public interface IUnitOfWork
    {
        IBatchRepository BatchRepository { get; }
        IBatchItemRepository BatchItemRepository { get; }
        IBatchUpdateReasonRepository BatchUpdateReasonRepository { get; }
        IProductRepository ProductRepository { get; }

        int Save();
        Task<int> SaveAsync();
    }
}