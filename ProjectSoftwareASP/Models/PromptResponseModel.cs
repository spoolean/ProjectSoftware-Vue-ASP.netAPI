using Newtonsoft.Json;

namespace ProjectSoftwareASP.Models
{
    public class PromptResponseModel
    {
        [JsonProperty("choices")]
        public Choice[] Choices { get; set; }
    }

    public class Choice
    {
        [JsonProperty("text")]
        public string Text { get; set; }
    }
}
