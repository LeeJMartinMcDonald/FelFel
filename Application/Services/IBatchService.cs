using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Models;

namespace Application.Services
{
    public interface IBatchService
    {
        void AddNewBatch(BatchNew model);
        void AddBatchItem(BatchItem model);

        // TODO: Refactor method name to GetBatches
        Task<IEnumerable<Batch>> Get();
        Task<Batch> GetBatch(long id);

        Task<IEnumerable<BatchItem>> GetBatchItems(long batchId);
    }
}