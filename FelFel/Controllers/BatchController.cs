using System.Threading.Tasks;
using Application.Models;
using Application.Services;
using Data.Queries;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

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
        public async Task<IActionResult> AddNewBatch([FromBody]BatchNew newBatch)
        {
            _batchService.AddNewBatch(newBatch);
            var result = await _unitOfWork.SaveAsync();
            if (result > 0)
            {
                return Ok(result);
            }

            return StatusCode(500, "Unable to add new batch.");
        }

        [HttpPost("[action]")]
        public async Task<IActionResult> AddBatchItem([FromBody]BatchItem batchItem)
        {
            _batchService.AddBatchItem(batchItem);
            var result = await _unitOfWork.SaveAsync();
            if (result > 0)
            {
                return Ok(result);
            }

            return StatusCode(500, "Unable to add new batch item.");
        }

        [HttpGet("[action]/{id}")]
        public async Task<IActionResult> GetBatch(long id)
        {
            var batch = await _batchService.GetBatch(id);
            if (batch != null)
            {
                return Ok(batch);
            }

            return StatusCode(500, "Unable to retrieve batch.");
        }

        [HttpGet("[action]")]
        public async Task<IActionResult> GetBatches()
        {
            var batches = await _batchService.GetBatches();
            if (batches != null)
            {
                return Ok(batches);
            }

            return StatusCode(500, "Unable to retrieve batches.");
        }

        [HttpGet("[action]/{id}")]
        public async Task<IActionResult> GetBatchItems(long id)
        {
            var batchItems = await _batchService.GetBatchItems(id);
            if (batchItems != null)
            {
                return Ok(batchItems);
            }

            return StatusCode(500, $"Unable to retrieve batch items for batch: {id}.");
        }
    }
}
