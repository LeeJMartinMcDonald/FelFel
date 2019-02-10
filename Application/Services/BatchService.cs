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
        // TODO: add column type to location table - map to enum - 1 being warehouse
        private readonly long _wareHouseLocationId = 1;

        public BatchService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public void AddNewBatch(BatchNew model)
        {
            // TODO: Refactor - Create enum for reason ids
            // TODO: Add in foreign keys so items can be added by id instead of having to be looked up in services 
            var batchUpdateReason = _unitOfWork.BatchUpdateReasonRepository.Get(1).Result;
            var product = _unitOfWork.ProductRepository.Get(model.ProductId).Result;
            var location = _unitOfWork.LocationRepository.Get(_wareHouseLocationId).Result;

            // idealy use an auto-mapper
            var batch = new Entities.Batch
            {
                ExpirationDate = model.ExpirationDate,
                ExpiringTime = model.ExpiringTime,
                CheckedInDate = model.CheckedInDate,
                Product = product
            };
            this.UpdateBatchQuantity(batch, location, model.Quantity, true);

            batch.BatchItems.Add(new Entities.BatchItem
            {
                BatchUpdateReason = batchUpdateReason,
                Quantity = model.Quantity,
                Location = location
            });

            _unitOfWork.BatchRepository.Add(batch);
        }

        public void AddBatchItem(BatchItem model)
        {
            // TODO: Add in foreign keys so items can be added by id instead of having to be looked up in services 
            var batch = _unitOfWork.BatchRepository.GetBatch(model.BatchId).Result;
            var batchUpdateReason = _unitOfWork.BatchUpdateReasonRepository.Get(model.ReasonId).Result;
            var locationTo = _unitOfWork.LocationRepository.Get(model.LocationId).Result;
            // TODO: Refactor to pass location in via model - so transfers from locations can take place
            var locationFrom = _unitOfWork.LocationRepository.Get(_wareHouseLocationId).Result;

            // idealy use an auto-mapper
            var batchItem = new Entities.BatchItem
            {
                Batch = batch,
                Quantity = model.Quantity,
                BatchUpdateReason = batchUpdateReason,
                Location = locationTo
            };

            this.UpdateBatchQuantity(batch, locationTo, model.Quantity, true);
            this.UpdateBatchQuantity(batch, locationFrom, model.Quantity, false);

            _unitOfWork.BatchItemRepository.Add(batchItem);
        }

        private void UpdateBatchQuantity(Entities.Batch batch, Entities.Location location, int quantity, bool isIncrement)
        {
            var batch2Location = batch.Batch2Location.FirstOrDefault(x => x.LocationId == location.Id);
            if (batch2Location != null)
            {
                if (isIncrement)
                {
                    batch2Location.Quantity += quantity;
                }
                else
                {
                    batch2Location.Quantity -= quantity;
                }
            }
            else
            {
                batch.Batch2Location.Add(new Entities.Batch2Location
                {
                    Location = location,
                    Quantity = quantity
                });
            }
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
                Quantity = batch.LocationQuantity(_wareHouseLocationId)
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
                Quantity = x.LocationQuantity(_wareHouseLocationId),
                Product = x.Product.Name
            });

            return result;
        }

        public async Task<IEnumerable<Batch>> GetBatches(long id)
        {
            var batches = await _unitOfWork.BatchRepository.Get(id);
            var result = batches.Select(x => new Batch
            {
                Id = x.Id,
                CheckedInDate = x.CheckedInDate,
                ExpirationDate = x.ExpirationDate,
                ExpiringTime = x.ExpiringTime,
                Quantity = x.LocationQuantity(_wareHouseLocationId),
                Product = x.Product.Name
            });

            return result;
        }

        public async Task<IEnumerable<BatchItem>> GetBatchItems(long batchId)
        {
            var batches = await _unitOfWork.BatchItemRepository.Get(batchId);

            var result = batches.Select(x => new BatchItem
            {
                Id = x.Id,
                Quantity = x.Quantity,
                Reason = x.BatchUpdateReason.Reason,
                Location = x.Location.Name
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
