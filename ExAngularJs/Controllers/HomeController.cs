using System.Web.Mvc;

namespace ExAngularJs.Controllers
{
    public class HomeController : Controller
    {
        //
        // GET: /Home/
        [ValidateInput(false)]
        public ActionResult Index()
        {
            return View();
        }

        [ValidateInput(false)]
        public ActionResult CadastroUsuario()
        {
            return View();
        }

        [ValidateInput(false)]
        public ActionResult ConsultaUsuario()
        {
            return View();
        }

        [ValidateInput(false)]
        public ActionResult Sobre()
        {
            return View();
        }
    }
}
