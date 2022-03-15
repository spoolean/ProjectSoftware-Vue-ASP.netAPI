using Newtonsoft.Json;

namespace ProjectSoftwareASP.Models
{
    public class GoogleResponseModel
    {
        [JsonProperty("audioContent")]
        public string AudioContent { get; set; }
    }
}
