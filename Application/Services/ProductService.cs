using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Models;
using Data.Queries;

namespace Application.Services
{
    public class ProductService : IProductService
    {
        private readonly IUnitOfWork _unitOfWork;

        public ProductService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public async Task<IEnumerable<Product>> GetProducts()
        {
            var products = await _unitOfWork.ProductRepository.Get();
            var result = products.Select(x => new Product {
                Id = x.Id,
                Name = x.Name
            });

            return result;
        }
    }
}
