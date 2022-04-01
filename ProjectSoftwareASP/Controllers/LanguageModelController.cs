using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;
using RestSharp;
using RestSharp.Serializers;
using ProjectSoftwareASP.Models;
using Newtonsoft.Json;

namespace ProjectSoftwareASP.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class LanguageModelController : ControllerBase
    {
        private readonly string SecretKey = "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"; 
        private readonly RestClient Client = new RestClient();

        [HttpPost(Name = "GetMachineLearning")]
        public async Task<IActionResult> GetModelResponse([FromBody] LanguageModel model)
        {
            string requestText = model.Text;
            string requestType = model.Type;

            string url = "https://api.openai.com/v1/engines/text-davinci-001";

            if (string.IsNullOrEmpty(requestText))
            {
                return BadRequest("Please enter a valid prompt or question");
            }

            if (requestType == "completion")
            {
                // Rest request and headers.
                RestRequest request = new RestRequest($"{url}/completions", Method.Post);
                request.AddHeader("Authorization", $"Bearer {SecretKey}");

                // Body of the request.
                var json = new
                {
                    prompt = $"{requestText}",
                    max_tokens = 1000
                };
                request.AddJsonBody(json);

                try
                {
                    RestResponse response = await Client.ExecuteAsync(request);
                    PromptResponseModel responseModel = JsonConvert.DeserializeObject<PromptResponseModel>(response.Content);
                    Console.WriteLine(responseModel.Choices.FirstOrDefault().Text);
                    return Ok(responseModel.Choices.FirstOrDefault().Text);
                }
                catch (Exception e)
                {
                    return BadRequest(e.Message);
                }
            }
            else if (requestType == "chat")
            {
                string promptFront = "The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly.\n\nHuman: ";
                if (!requestText.Contains(promptFront))
                {
                    requestText = promptFront + requestText;
                }
                string[] stopArray = { " Human:", " AI:" };
                Console.WriteLine(requestText);

                // Rest request and headers.
                RestRequest request = new RestRequest($"{url}/completions", Method.Post);
                request.AddHeader("Authorization", $"Bearer {SecretKey}");

                // Body of the request.
                var json = new
                {
                    prompt = $"{requestText}\nAI: ",
                    max_tokens = 600,
                    stop = stopArray,
                    frequency_penalty = 0.0,
                    presence_penalty = 0.6,
                    temperature = 0.9
                };
                request.AddJsonBody(json);

                try
                {
                    RestResponse response = await Client.ExecuteAsync(request);
                    PromptResponseModel responseModel = JsonConvert.DeserializeObject<PromptResponseModel>(response.Content);
                    Console.WriteLine(responseModel.Choices.FirstOrDefault().Text);
                    return Ok("\nAI:" + responseModel.Choices.FirstOrDefault().Text.Trim() + "\nHuman: ");
                }
                catch (Exception e)
                {
                    return BadRequest(e.Message);
                }
            }
            else
            {
                return BadRequest("There has been an error with your request!");
            }

            return BadRequest("I dont know how it got here?");
        }
    }
}
