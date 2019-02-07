using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Models;

namespace Application.Services
{
    public interface IBatchService
    {
        void AddNewBatch(BatchNew model);
        void AddBatchItem(BatchItem model);

        Task<IEnumerable<Batch>> GetBatches();
        Task<IEnumerable<Batch>> GetBatches(long id);

        Task<Batch> GetBatch(long id);
        Task<IEnumerable<BatchItem>> GetBatchItems(long batchId);
        Task<IEnumerable<BatchUpdateReason>> GetBatchUpdateReasons();
    }
}