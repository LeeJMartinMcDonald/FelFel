using System.Collections.Generic;
using System.Threading.Tasks;

namespace Data.Queries
{
    public interface IUnitOfWork
    {
        IBatchRepository BatchRepository { get; }
        int Save();
        Task<int> SaveAsync();
    }
}