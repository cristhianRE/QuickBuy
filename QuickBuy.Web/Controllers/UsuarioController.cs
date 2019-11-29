using Microsoft.AspNetCore.Mvc;
using QuickBuy.Dominio.Contratos;
using QuickBuy.Dominio.Entidades;
using System;

namespace QuickBuy.Web.Controllers
{
    [Route("[controller]")]
    public class UsuarioController : Controller
    {
        private readonly IUsuarioRepositorio _repositorio;

        public UsuarioController(IUsuarioRepositorio repositorio)
        {
            _repositorio = repositorio;
        }

        [HttpGet]
        public ActionResult Get()
        {
            try
            {
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }

        [HttpPost("VerificarUsuario")]
        public ActionResult VerificarUsuario([FromBody] Usuario obj)
        {
            try
            {
                var registro = _repositorio.Obter(obj.Email, obj.Senha);

                if (registro != null)
                {
                    return Ok(registro);
                }
                return BadRequest("Usuário ou senha inválido");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }

        [HttpPost]
        public ActionResult Post()
        {
            try
            {
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }
    }
}
