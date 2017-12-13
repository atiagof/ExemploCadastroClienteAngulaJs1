using System.Web.Mvc;

namespace ExAngularJs.Controllers
{
    public class CampoController : Controller
    {
        [ValidateInput(false)]
        public ActionResult Index()
        {

            return View();
        }

    }
}