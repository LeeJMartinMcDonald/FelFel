using System.Threading.Tasks;
using Application.Models;
using Application.Services;
using Data.Queries;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace FelFel.Controllers
{
    [Route("api/[controller]")]
    public class ProductController : Controller
    {
        private readonly IProductService _productService;
        private IUnitOfWork _unitOfWork;

        public ProductController(
            IProductService productService,
            IUnitOfWork unitOfWork
        )
        {
            _productService = productService;
            _unitOfWork = unitOfWork;
        }
        
        [HttpGet("[action]")]
        public async Task<IActionResult> GetProducts()
        {
            var products = await _productService.GetProducts();
            if (products != null)
            {
                return Ok(products);
            }

            return StatusCode(500, "Unable to retrieve products.");
        }

        [HttpGet("[action]/{id}")]
        public async Task<IActionResult> GetProduct(long id)
        {
            var product = await _productService.GetProduct(id);
            if (product != null)
            {
                return Ok(product);
            }

            return StatusCode(500, "Unable to retrieve product.");
        }
    }
}
