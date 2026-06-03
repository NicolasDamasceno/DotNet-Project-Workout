using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.models;
using Microsoft.EntityFrameworkCore;
// Classe de conexão com banco de dados - Permite ler as tabeleas transformando em objetos.
namespace api.Data
{
    public class ApplicationDBContext : DbContext
    {   //Construtor
        public ApplicationDBContext(DbContextOptions<ApplicationDBContext> dbContextOptions)
        :base(dbContextOptions)
        {
            
        }

        public DbSet<Stock> Stocks { get; set; }
        public DbSet<Comment> Comments { get; set; }
    }
}