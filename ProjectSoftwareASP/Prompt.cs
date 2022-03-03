using Newtonsoft.Json;

namespace ProjectSoftwareASP
{
    public class Prompt
    {
        [JsonProperty("text")]
        public string Text { get; set; }
    }
}
