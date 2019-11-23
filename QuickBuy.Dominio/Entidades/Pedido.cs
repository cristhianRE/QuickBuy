using QuickBuy.Dominio.ObjetoDeValor;
using System;
using System.Collections.Generic;
using System.Linq;

namespace QuickBuy.Dominio.Entidades
{
    public class Pedido : Entidade
    {
        public int Id { get; set; }
        public DateTime DataPedido { get; set; }
        public int UsuarioId { get; set; }
        public DateTime DataPrevisaoEntrega { get; set; }
        public string CEP { get; set; }
        public string Estado { get; set; }
        public string Cidade { get; set; }
        public string EnderecoCompleto { get; set; }
        public int FormaPagamentoId { get; set; }
        public FormaPagamento FormaPagamento { get; set; }
        public ICollection<Usuario> ItensPedido { get; set; }

        public override void Validate()
        {
            LimparMensagensValidacao();

            if (!ItensPedido.Any())
            {
                AdicionarMensagem("Pedido não pode ficar sem Item");
            }
            if (!string.IsNullOrEmpty(CEP))
            {
                AdicionarMensagem("CEP deve estar preenchido");
            }
            if (FormaPagamentoId == 0)
            {
                AdicionarMensagem("Não foi informado a forma de pagamento");
            }
        }
    }
}
