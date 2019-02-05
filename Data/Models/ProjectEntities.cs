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
        }
    }
}

