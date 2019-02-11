using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Models;

namespace Application.Services
{
    public interface ILocationService
    {
        Task<IEnumerable<Location>> GetLocations();
        Task<IEnumerable<Location>> GetLocationsWithQuantity(long batchId);
    }
}