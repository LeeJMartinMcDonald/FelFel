using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Models;
using Data.Queries;

namespace Application.Services
{
    public class LocationService : ILocationService
    {
        private readonly IUnitOfWork _unitOfWork;

        public LocationService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public async Task<IEnumerable<Location>> GetLocations()
        {
            var locations = await _unitOfWork.LocationRepository.Get();
            var result = locations.Select(x => new Location {
                Id = x.Id,
                Name = x.Name
            });

            return result;
        }
    }
}
