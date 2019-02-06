using System.Collections.Generic;
using System.Threading.Tasks;
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

        public async Task<IEnumerable<Entities.Batch>> Get()
        {
            return await _unitOfWork.BatchRepository.Get();
        }
    }
}
