using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Models;
using Data.Queries;

namespace Application.Services
{
    public class BatchService : IBatchService
    {
        private readonly IUnitOfWork _unitOfWork;

        public BatchService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public void AddNewBatch(BatchNew model)
        {
            // idealy use an auto-mapper
            var batch = new Entities.Batch
            {
                ExpirationDate = model.ExpirationDate,
                ExpiringTime = model.ExpiringTime,
                CheckedInDate = model.CheckedInDate,
            };

            batch.BatchItems.Add(new Entities.BatchItem
            {
                Quantity = model.Quantity
            });

            _unitOfWork.BatchRepository.Add(batch);
        }

        public void AddBatchItem(BatchItem model)
        {
            var batch = _unitOfWork.BatchRepository.GetBatch(model.BatchId).Result;

            // idealy use an auto-mapper
            var batchItem = new Entities.BatchItem
            {
                Batch = batch,
                Quantity = model.Quantity
            };

            _unitOfWork.BatchItemRepository.Add(batchItem);
        }

        public async Task<Batch> GetBatch(long id)
        {
            var batch = await _unitOfWork.BatchRepository.GetBatch(id);
            var result = new Batch
            {
                Id = batch.Id,
                CheckedInDate = batch.CheckedInDate,
                ExpirationDate = batch.ExpirationDate,
                ExpiringTime = batch.ExpiringTime,
                Quantity = batch.BatchItems.Sum(bi => bi.Quantity)
            };

            return result;
        }

        public async Task<IEnumerable<Batch>> GetBatches()
        {
            var batches = await _unitOfWork.BatchRepository.Get();
            var result = batches.Select(x => new Batch {
                Id = x.Id,
                CheckedInDate = x.CheckedInDate,
                ExpirationDate = x.ExpirationDate,
                ExpiringTime = x.ExpiringTime,
                Quantity = x.BatchItems.Sum(bi => bi.Quantity)
            });

            return result;
        }

        public async Task<IEnumerable<BatchItem>> GetBatchItems(long batchId)
        {
            var batches = await _unitOfWork.BatchItemRepository.Get(batchId);
            var result = batches.Select(x => new BatchItem
            {
                Id = x.Id,
                Quantity = x.Quantity
            });

            return result;
        }

        public async Task<IEnumerable<BatchUpdateReason>> GetBatchUpdateReasons()
        {
            var reasons = await _unitOfWork.BatchUpdateReasonRepository.Get();
            var result = reasons.Select(x => new BatchUpdateReason
            {
                Id = x.Id,
                Reason = x.Reason
            });

            return result;
        }
    }
}
