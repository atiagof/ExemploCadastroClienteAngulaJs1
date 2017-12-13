using System;
using System.Linq;
using System.Web.Http;
using ExAngularJs.Models;
using System.Web.Script.Serialization;
using System.Net.Http.Formatting;
using ExAngularJs.Context;

namespace ExAngularJs.Controllers
{
    public class UsuarioController : ApiController
    {
        private readonly Usuario[] Usuarios = new Usuario[]
        {
            new Usuario {Nome = "Alex"},
            new Usuario {Nome = "Anderson"},
            new Usuario {Nome = "Juliana"},
            new Usuario {Nome = "Teixeira"},
            new Usuario {Nome = "Jarbas"},
        };


        private string Usuario(FormDataCollection form)
        {
            string nome = form.Get("Nome");
            string rg = form.Get("RG");
            string login = form.Get("Login");
            string senha = form.Get("Senha");
            int id_grupo = 830;
            string salt = "asd";
            bool ativo = false;

            Usuario obj = new Usuario()
            {
                Nome = nome,
                RG = rg,
                Login = login,
                Senha = senha,
                ID_Grupo = id_grupo,
                Salt = salt,
                ATIVO = ativo
            };

            return "Customer added successfully!";

        }

        
        // GET api/usuario
        public String Get()
        {
            JavaScriptSerializer s = new JavaScriptSerializer();


            return s.Serialize(Usuarios);
            
           //return Usuarios;

        }

        // GET api/usuario/5
        public Usuario Get(string Nome)
        {

            var usuarios = Usuarios;

            return usuarios.SingleOrDefault(z => z.Nome == Nome);
        }

        // POST api/usuario
        [HttpPost]
        public IHttpActionResult Post(Usuario model)
        {

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }


            using (TesteContext db = new TesteContext())
            {
                db.Usuario.Add(model);
                db.SaveChanges();             

            }
            


            return Ok(model);
        }

        // PUT api/usuario/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/usuario/5
        public void Delete(int id)
        {
        }
    }
}
