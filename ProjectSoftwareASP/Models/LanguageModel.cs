using Newtonsoft.Json;

namespace ProjectSoftwareASP.Models
{
    public class LanguageModel
    {
        [JsonProperty("text")]
        public string Text { get; set; }

        [JsonProperty("type")]
        public string Type { get; set; }
    }
}
