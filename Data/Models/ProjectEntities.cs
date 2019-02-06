using Entities;
using Microsoft.EntityFrameworkCore;

namespace Data.Models
{
    public partial class ProjectEntities : DbContext
    {
        public ProjectEntities(string connectionString)
            : base()
        {
        }

        public ProjectEntities()
            : base()
        {
        }

        public static string ConnectionString { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer(ConnectionString);
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // constraints to go here
        }

        public virtual DbSet<Batch> Batches { get; set; }
        public virtual DbSet<BatchItem> BatchItems { get; set; }
        public virtual DbSet<CorrectionReason> CorrectionReasons { get; set; }
        public virtual DbSet<Customer> Customers { get; set; }
        public virtual DbSet<Order> Orders { get; set; }
        public virtual DbSet<Product> Products { get; set; }
        public virtual DbSet<Supplier> Suppliers { get; set; }
    }
}

