using Newtonsoft.Json;

namespace ProjectSoftwareASP.Models
{
    public class SubmitContent
    {
        [JsonProperty("story")]
        public Story? Story { get; set; }

        [JsonProperty("chat")]
        public Chat? Chat { get; set; }

        [JsonProperty("voice1")]
        public Voice? Voice1 { get; set; }

        [JsonProperty("voice2")]
        public Voice? Voice2 { get; set; }

        [JsonProperty("voices")]
        public Voices? Voices { get; set; }
    }

    public class Story
    {
        [JsonProperty("trailOff")]
        public string? TrailOff { get; set; }

        [JsonProperty("trailOffReason")]
        public string? TrailOffReason { get; set; }

        [JsonProperty("errors")]
        public string? Errors { get; set; }

        [JsonProperty("knowledgable")]
        public string? Knowledgable { get; set; }

        [JsonProperty("engagingStorys")]
        public string? EngagingStorys { get; set; }

        [JsonProperty("prompt1")]
        public string? Prompt1 { get; set; }

        [JsonProperty("prompt2")]
        public string? Prompt2 { get; set; }

        [JsonProperty("prompt3")]
        public string? Prompt3 { get; set; }
    }

    public class Chat
    {
        [JsonProperty("realisticAnswers")]
        public string? RealisticAnswers { get; set; }

        [JsonProperty("couldConverse")]
        public string? CouldConverse { get; set; }

        [JsonProperty("canLie")]
        public string? CanLie { get; set; }
    }

    public class Voice
    {
        [JsonProperty("overallRating")]
        public int? OverallRating { get; set; }

        [JsonProperty("listeningEffort")]
        public string? ListeningEffort { get; set; }

        [JsonProperty("hardToUnderstand")]
        public string? HardToUnderstand { get; set; }

        [JsonProperty("whichWords")]
        public string? WhichWords { get; set; }

        [JsonProperty("voicePace")]
        public string? VoicePace { get; set; }

        [JsonProperty("voice3Comparison")]
        public string? Voice3Comparison { get; set; }
    }

    public class Voices
    {
        [JsonProperty("preferredVoice")]
        public string? PreferredVoice { get; set; }

        [JsonProperty("preferredVoiceReason")]
        public string? PreferredVoiceReason { get; set; }

        [JsonProperty("clearestVoice")]
        public string? ClearestVoice { get; set; }
    }
}
