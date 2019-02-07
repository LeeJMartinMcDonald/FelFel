using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Models;

namespace Application.Services
{
    public interface IProductService
    {
        Task<IEnumerable<Product>> GetProducts();
    }
}