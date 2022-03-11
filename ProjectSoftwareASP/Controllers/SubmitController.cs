using Microsoft.AspNetCore.Mvc;
using ProjectSoftwareASP.Models;

namespace ProjectSoftwareASP.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class SubmitController : Controller
    {
        [HttpPost]
        public IActionResult PostSurvey([FromBody] SumbitContent Response)
        {
            return Ok("Deployed to the server successfully");
        }
    }
}
