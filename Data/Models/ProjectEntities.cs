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
            modelBuilder.Entity<Batch2Location>(entity =>
            {
                entity.HasKey(e => new { e.BatchId, e.LocationId });

                entity.HasOne(d => d.Batch)
                    .WithMany(p => p.Batch2Location)
                    .HasForeignKey(d => d.BatchId)
                    .HasConstraintName("fk_Batch2Location_BatchId_To_Batch_BatchId");

                entity.HasOne(d => d.Location)
                    .WithMany(p => p.Batch2Location)
                    .HasForeignKey(d => d.LocationId)
                    .HasConstraintName("fk_Batch2Location_LocationId_To_Location_LocationId");
            });
        }

        public virtual DbSet<Batch2Location> Batch2Location { get; set; }
        public virtual DbSet<Batch> Batches { get; set; }
        public virtual DbSet<BatchItem> BatchItems { get; set; }
        public virtual DbSet<BatchUpdateReason> BatchUpdateReasons { get; set; }
        public virtual DbSet<Customer> Customers { get; set; }
        public virtual DbSet<Location> Locations { get; set; }
        public virtual DbSet<Order> Orders { get; set; }
        public virtual DbSet<Product> Products { get; set; }
        public virtual DbSet<Supplier> Suppliers { get; set; }
    }
}

