using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using QuickBuy.Dominio.Entidades;

namespace QuickBuy.Repositorio.Config
{
    public class UsuarioConfiguration : IEntityTypeConfiguration<Usuario>
    {
        public void Configure(EntityTypeBuilder<Usuario> builder)
        {
            builder.HasKey(u => u.Id);

            // builder utiliza o padrão Fluent
            builder.Property(u => u.Nome).IsRequired().HasMaxLength(50);
            builder.Property(u => u.SobreNome).IsRequired().HasMaxLength(50);
            builder.Property(u => u.Email).IsRequired().HasMaxLength(50);
            builder.Property(u => u.Senha).IsRequired().HasMaxLength(400);
            builder.HasMany(u => u.Pedidos).WithOne(u => u.Usuario);
        }
    }
}
