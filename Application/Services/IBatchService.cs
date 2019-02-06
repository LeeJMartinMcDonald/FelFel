using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Models;

namespace Application.Services
{
    public interface IBatchService
    {
        void Add(Batch model);

        void AddNewBatch(BatchNew model);

        Task<IEnumerable<Entities.Batch>> Get();
    }
}