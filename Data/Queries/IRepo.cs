using System.Collections.Generic;
namespace Data.Queries
{
    public interface IRepo<T> where T : class
    {
        void Add(T entityToAdd);
        void AddRange(IEnumerable<T> entitiesToAdd);
        void Delete(T entityToDelete);
        void Update(T entityToAdd);
        void UpdateRange(IEnumerable<T> entityToAdd);
    }
}