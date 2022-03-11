using Newtonsoft.Json;

namespace ProjectSoftwareASP.Models
{
    public class SumbitContent{
        [JsonProperty("checkBox")]
        public bool CheckBox { get; set; }

        [JsonProperty("rating")]
        public int Rating { get; set; }

        [JsonProperty("reviewText")]
        public string? ReviewText { get; set; }
    }
}
