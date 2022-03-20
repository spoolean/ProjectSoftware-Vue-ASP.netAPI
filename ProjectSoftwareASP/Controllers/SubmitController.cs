using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using ProjectSoftwareASP.Models;

namespace ProjectSoftwareASP.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class SubmitController : Controller
    {
        [HttpPost]
        public IActionResult PostSurvey([FromBody] SubmitContent Response)
        {
            try
            {
                return Ok("This worked");
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}
