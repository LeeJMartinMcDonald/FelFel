﻿using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Models;

namespace Application.Services
{
    public interface IBatchService
    {
        void AddNewBatch(BatchNew model);

        Task<IEnumerable<Batch>> Get();
        Task<Batch> GetBatch(int id);

        Task<IEnumerable<BatchItem>> GetBatchItems(int batchId);
    }
}