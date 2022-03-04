using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ProjectSoftwareASP.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class LanguageModelController : ControllerBase
    {
        [HttpGet(Name = "GetMachineLearning")]
        public async Task<string> GetModelResponse()
        {
            return "Response ok".ToString();
        }
    }
}
