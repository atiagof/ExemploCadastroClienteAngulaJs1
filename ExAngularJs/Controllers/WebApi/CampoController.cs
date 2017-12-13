using System;
using System.Linq;
using System.Web.Http;
using ExAngularJs.Models;
using System.Web.Script.Serialization;
using System.Net.Http.Formatting;
using ExAngularJs.Context;
using System.Threading.Tasks;
using System.Collections.Generic;

namespace ExAngularJs.Controllers
{
    [RoutePrefix("api/Campos")]
    public class CamposController : ApiController
    {       
        [HttpGet]
        public async Task<IHttpActionResult> listaCampos()
        {
            List<CampoModel> lista = new List<CampoModel>();
            try
            {
                using (var dbEst = new TesteContext())
                {
                    lista = dbEst.Campo.Where(x => x.Ativo == false && x.ID > 30)
                    .Select(C => new CampoModel
                    {
                        Id = C.ID,
                        Nome = C.Nome
                    }
                    ).Take(10).ToList();
                }
            }
            catch (Exception e)
            {
                ModelState.AddModelError("RestricaoCampo", "Site temporariamente indisponível. Tente mais tarde.");
                return BadRequest(ModelState);
            }
            return Ok(lista);
            

        }

        [HttpGet]
        public async Task<IHttpActionResult> pesquisaCampo(int Id)
        {
            CAMPO campo = new CAMPO();
            try
            {
                using (var dbEst = new TesteContext())
                {
                    campo = dbEst.Campo.Single(x => x.ID == Id);
                }
            }
            catch (Exception e)
            {
                ModelState.AddModelError("RestricaoCampo", "Site temporariamente indisponível. Tente mais tarde.");
                return BadRequest(ModelState);
            }
            return Ok(campo);
        }

        [HttpPost]
        [ActionName("salvaCampo")]
        public async Task<IHttpActionResult> salvaCampo([FromBody]CampoModel model)
        {

            //if (!ModelState.IsValid)
            //{
            //    return BadRequest(ModelState);
            //}

            try
            {
                using (TesteContext db = new TesteContext())
                {
                    CAMPO campo = new CAMPO();
                    campo.Nome = model.Nome;
                    campo.Ativo = false;
                    db.Campo.Add(campo);
                    db.SaveChanges();

                }
            }
            catch (Exception e)
            {
                ModelState.AddModelError("Post", "Site temporariamente indisponível. Tente mais tarde.");
                return BadRequest(ModelState);
            }

            return Ok(model);
        }

        [HttpPost]
        [ActionName("editaCampo")]
        public async Task<IHttpActionResult> editaCampo(CampoModel model)
        {

            //if (!ModelState.IsValid)
            //{
            //    return BadRequest(ModelState);
            //}
            try
            {
                using (TesteContext db = new TesteContext())
                {
                    CAMPO campo = db.Campo.Single(x => x.ID == model.Id);
                    campo.Nome = model.Nome;
                    campo.Ativo = false;
                    db.SaveChanges();
                }
                return Ok(model);
            }
            catch (Exception e)
            {
                ModelState.AddModelError("Post", "Site temporariamente indisponível. Tente mais tarde.");
                return BadRequest(ModelState);
            }        
        }

        [HttpPost]
        [ActionName("apagaCampo")]
        public async Task<IHttpActionResult> apagaCampo(int id)
        {
            try
            {
                CAMPO campo = new CAMPO();
                using (TesteContext db = new TesteContext())
                {
                    campo = db.Campo.Single(x => x.ID == id);
                    db.Campo.Remove(campo);
                    db.SaveChanges();

                }
                return Ok(campo);
            }
            catch (Exception e)
            {
                ModelState.AddModelError("Post", "Site temporariamente indisponível. Tente mais tarde.");
                return BadRequest(ModelState);
            }
        }
    }
}
