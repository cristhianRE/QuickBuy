using Microsoft.AspNetCore.Mvc;
using QuickBuy.Dominio.Contratos;
using QuickBuy.Dominio.Entidades;
using System;

namespace QuickBuy.Web.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProdutoController : ControllerBase
    {
        private readonly IProdutoRepositorio _repositorio;

        public ProdutoController(IProdutoRepositorio repositorio)
        {
            _repositorio = repositorio;
        }
        
        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok();
                //if (condicao == false)
                //{
                //     return BasRequest("")
                //}
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }

        [HttpPost]
        public IActionResult Post([FromBody]Produto obj)
        {
            try
            {
                _repositorio.Adicionar(obj);
                return Created("produto", obj);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }
    }
}
