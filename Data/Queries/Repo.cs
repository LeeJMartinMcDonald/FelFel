using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Data.Models;
using Microsoft.EntityFrameworkCore;

namespace Data.Queries
{
    public class Repo<T> : IRepo<T> where T : class
    {
        protected readonly ProjectEntities _context;

        public Repo(ProjectEntities context)
        {
            _context = context;
        }

        public void Add(T entityToAdd)
        {
            _context.Set<T>().Add(entityToAdd);
        }

        public void AddRange(IEnumerable<T> entitiesToAdd)
        {
            _context.Set<T>().AddRange(entitiesToAdd);
        }

        public void Update(T entityToAdd)
        {
            _context.Set<T>().Update(entityToAdd);
        }

        public void UpdateRange(IEnumerable<T> entityToAdd)
        {
            _context.Set<T>().UpdateRange(entityToAdd);
        }

        protected virtual async Task<T> FirstOrDefaultAsync(System.Linq.Expressions.Expression<Func<T, bool>> predicate)
        {
            return await _context.Set<T>().FirstOrDefaultAsync(predicate);
        }

        protected virtual IQueryable<T> GetAll()
        {
            IQueryable<T> query = _context.Set<T>();
            return query;
        }

        protected virtual async Task<T> GetAsync(long id)
        {
            return await _context.Set<T>().FindAsync(id);
        }

        protected virtual IQueryable<T> FindBy(System.Linq.Expressions.Expression<Func<T, bool>> predicate)
        {
            IQueryable<T> query = _context.Set<T>().Where(predicate);
            return query;
        }

        protected virtual async Task<T[]> GetArrayAsync(System.Linq.Expressions.Expression<Func<T, bool>> predicate)
        {
            return await _context.Set<T>().Where(predicate).ToArrayAsync();
        }

        public virtual void Delete(T entityToDelete)
        {
            _context.Set<T>().Remove(entityToDelete);
        }
    }
}