using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Application.Services;
using Application.Models;
using Data.Queries;

namespace FelFel.Controllers
{
    [Route("api/[controller]")]
    public class BatchController : Controller
    {
        private readonly IBatchService _batchService;
        private IUnitOfWork _unitOfWork;

        public BatchController(
            IBatchService batchService,
            IUnitOfWork unitOfWork
        )
        {
            _batchService = batchService;
            _unitOfWork = unitOfWork;
        }

        [HttpPost("[action]")]
        public async Task<IActionResult> Add([FromBody]Batch model)
        {
            _batchService.Add(model);
            var result = await _unitOfWork.SaveAsync();
            if (result > 0)
            {
                return Ok();
            }

            return BadRequest("unable to be created: ");

            //var result = await PreferenceCentreManager(subSiteId).UpdateVehicleDetails(UserId(subSiteId), vehicle);

            //if (result.StatusType == PreferenceCentreResponseStatus.Success)
            //{
            //    return Ok();
            //}
            //else
            //{
            //    return NotFound();
            //}
        }
    }
}
