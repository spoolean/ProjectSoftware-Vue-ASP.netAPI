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
                var jsonConvert = JsonConvert.SerializeObject(Response);
                using StreamWriter file = new("responses.txt", append: true);
                file.WriteLine(jsonConvert+",");

                return Ok("Deployed to the server successfully");
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }


    }
}
