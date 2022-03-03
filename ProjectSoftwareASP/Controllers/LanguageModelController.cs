using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ProjectSoftwareASP.Controllers
{
    [Route("api/languagemodel")]
    [ApiController]
    public class LanguageModelController : ControllerBase
    {
        [HttpPost]
        public async Task<IActionResult> GetModelResponse([FromBody] Prompt prompt)
        {
            string text = prompt.Text;

            return Ok(text);
        }
    }
}
