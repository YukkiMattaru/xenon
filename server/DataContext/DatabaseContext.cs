using Microsoft.EntityFrameworkCore;
using server.Models;

namespace server.DataContext
{
    public class DatabaseContext: DbContext
    {
        public DbSet<User> Users { get; set; }

        public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options)
        {
            Database.EnsureCreated();
        }
    }
}