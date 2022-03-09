using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Text;
using System.Security.Cryptography;
using Microsoft.CognitiveServices.Speech;

namespace ProjectSoftwareASP.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class TTSController : ControllerBase
    {
        /// <summary>
        /// Generates an Azure cognitive service speech mp3 file that is, 
        /// transpiled into a byte[] to be sent to the user.
        /// </summary>
        /// <param name="answer"></param>
        /// <returns>byte[] audioStream</returns>
        [HttpGet]
        [Route("GetAzure/{answer}")]
        public async Task<FileContentResult> AzureTTS(string answer)
        {
            answer = answer.Replace("_", " ");
            string fileName = GetHashString(answer);

            // Instanciate Azure Cognitive Speech Service with my secret key.
            SpeechConfig config = SpeechConfig.FromSubscription("a5933538f93e45a4bf4566c35d8cd955", "uksouth");
            config.SetSpeechSynthesisOutputFormat(SpeechSynthesisOutputFormat.Audio24Khz160KBitRateMonoMp3); // Set to mp3 format. 
            config.SpeechSynthesisLanguage = "en-GB"; // Set the language.
            config.SpeechSynthesisVoiceName = "en-GB-RyanNeural"; // Set the voice model

            // Speech synthesis
            SpeechSynthesizer synthesizer = new SpeechSynthesizer(config);

            try
            {
                // Generate the audio using the above config. 
                SpeechSynthesisResult result = await synthesizer.SpeakTextAsync(answer);
                byte[] audioStream = result.AudioData; // Take the audio stream.
                return File(audioStream, "audio/mpeg"); // Send the file as an audio file.                 
            }
            catch (Exception)
            {
                return File(Encoding.UTF8.GetBytes("There was an error generating the Text-to-Speech audio file."), "text/plain");
            }           
        }

        [HttpGet]
        [Route("GetAWS")]
        public async Task<FileContentResult> AWSTTS()
        {
            return File(Encoding.UTF8.GetBytes("AWS"), "text/plain");
        }

        [HttpGet]
        [Route("GetGoogle")]
        public async Task<FileContentResult> GoogleTTS()
        {
            return File(Encoding.UTF8.GetBytes("Google"), "text/plain");
        }

        // Sha256 hash builder for the input text
        public static string GetHashString(string text) =>
        string.IsNullOrEmpty(text) ? string.Empty : BitConverter.ToString(new SHA256Managed().ComputeHash(System.Text.Encoding.UTF8.GetBytes(text))).Replace("-", string.Empty);





    }
}
