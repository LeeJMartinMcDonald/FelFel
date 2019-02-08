using System.Threading.Tasks;
using Application.Models;
using Application.Services;
using Data.Queries;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace FelFel.Controllers
{
    [Route("api/[controller]")]
    public class LocationController : Controller
    {
        private readonly ILocationService _locationService;
        private IUnitOfWork _unitOfWork;

        public LocationController(
            ILocationService locationService,
            IUnitOfWork unitOfWork
        )
        {
            _locationService = locationService;
            _unitOfWork = unitOfWork;
        }
        
        [HttpGet("[action]")]
        public async Task<IActionResult> GetLocations()
        {
            var locations = await _locationService.GetLocations();
            if (locations != null)
            {
                return Ok(locations);
            }

            return StatusCode(500, "Unable to retrieve locations.");
        }
    }
}
