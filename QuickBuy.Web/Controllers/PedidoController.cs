using Microsoft.AspNetCore.Mvc;
using QuickBuy.Dominio.Contratos;
using QuickBuy.Dominio.Entidades;
using System;

namespace QuickBuy.Web.Controllers
{
    [Route("[controller]")]
    public class PedidoController : Controller
    {
        private readonly IPedidoRepositorio _repositorio;

        public PedidoController(IPedidoRepositorio repositorio)
        {
            _repositorio = repositorio;
        }

        [HttpPost]
        public IActionResult Post([FromBody] Pedido obj)
        {
            try
            {
                _repositorio.Adicionar(obj);
                return Ok(obj.Id);
            }
            catch (Exception e)
            {
                return BadRequest(e.ToString());
            }
        }
    }
}
