using System.Linq;
using Data.Models;
using Entities;

namespace Data.Queries
{
    public class BatchRepository : Repo<Batch>, IBatchRepository
    {
        private readonly IBatchRepository _batchRepository;

        public BatchRepository(ProjectEntities context) : base(context)
        {
        }
    }
}
