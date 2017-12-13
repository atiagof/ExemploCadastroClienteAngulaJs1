using ExAngularJs.Models;
using System.Data.Entity;

namespace ExAngularJs.Context
{
    public class TesteContext: DbContext 
    {
        public TesteContext()
            : base("DefaultConnection")
        {
        }


        public DbSet<Usuario> Usuario { get; set; }
        public DbSet<CAMPO> Campo { get; set; }


    }
}