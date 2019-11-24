using System.Collections.Generic;
using System.Linq;

namespace QuickBuy.Dominio.Entidades
{
    public abstract class Entidade
    {
        private List<string> _mensagensValidacao { get; set; }

        private List<string> _mensagemValidacao
        {
            get { return _mensagensValidacao ?? (_mensagensValidacao = new List<string>()); }
        }

        protected void LimparMensagensValidacao()
        {
            _mensagemValidacao.Clear();
        }

        protected void AdicionarMensagem(string msg)
        {
            _mensagemValidacao.Add(msg);
        }

        public abstract void Validate();

        protected bool EhValido 
        {
            get { return !_mensagemValidacao.Any(); }
        }
    }
}
