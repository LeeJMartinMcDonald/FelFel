using Application.Models;
using Data.Queries;
using Entities;

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
            var batch = new Entities.Batch
            {
                ExpirationDate = model.ExpirationDate,
                ExpiringTime = model.ExpiringTime,
                CheckedInDate = model.CheckedInDate,
                
            };

            _unitOfWork.BatchRepository.Add(batch);
        }
    }
}
