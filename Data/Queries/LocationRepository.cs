using System.Collections.Generic;
using System.Threading.Tasks;
using Data.Models;
using Entities;
using Microsoft.EntityFrameworkCore;

namespace Data.Queries
{
    public class LocationRepository : Repo<Location>, ILocationRepository
    {
        public LocationRepository(ProjectEntities context) : base(context)
        {
        }

        public async Task<IEnumerable<Location>> Get()
        {
            return await _context.Locations
                .ToListAsync()
                ;
        }
    }
}
