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

        public void Add(Models.Batch model)
        {
            // idealy use an auto-mapper
            var batch = new Entities.Batch
            {
                ExpirationDate = model.ExpirationDate,
                ExpiringTime = model.ExpiringTime,
                CheckedInDate = model.CheckedInDate,
            };

            _unitOfWork.BatchRepository.Add(batch);
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

        public async Task<IEnumerable<Batch>> Get()
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
    }
}
