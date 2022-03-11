using Microsoft.AspNetCore.Mvc;

namespace ProjectSoftwareASP.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class SubmitController : Controller
    {
        [HttpPost]
        public async Task<IActionResult> PostSurvey([FromBody] string Response)
        {
            return Ok("Deployed to the server successfully");
        }
    }
}
