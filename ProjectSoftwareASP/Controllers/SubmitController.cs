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
        public async Task<ActionResult> PostSurvey([FromBody] SubmitContent Response)
        {
            try
            {
                var jsonConvert = JsonConvert.SerializeObject(Response);
                using StreamWriter file = new("responses.txt", append: true);
                file.WriteLine(jsonConvert + ",");

                return Ok("Deployed to the server successfully");
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                return BadRequest(e.Message);
            }
        }


    }
}
