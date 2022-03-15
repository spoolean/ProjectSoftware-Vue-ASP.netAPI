using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Text;
using System.Security.Cryptography;
using Microsoft.CognitiveServices.Speech;
using Amazon.Polly;
using Amazon.Polly.Model;
using RestSharp;
using ProjectSoftwareASP.Models;
using Newtonsoft.Json;

namespace ProjectSoftwareASP.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class TTSController : ControllerBase
    {
        private readonly string GoogleSecretKey = "AIzaSyA5fOncv3lriSl_o-MgV3PsUJom9gNXtz0";
        private readonly RestClient Client = new RestClient();

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
            catch (Exception e)
            {
                return File(Encoding.UTF8.GetBytes(e.Message), "text/plain");
            }           
        }

        [HttpGet]
        [Route("GetAWS/{answer}")]
        public async Task<FileContentResult> AWSTTS(string answer)
        {
            // Credentials 
            
            // Setting up the config
            AmazonPollyConfig config = new AmazonPollyConfig();
            config.ServiceURL = "http://polly.eu-west-2.amazonaws.com";
            // Setting the client with the config file. 
            AmazonPollyClient pc = new AmazonPollyClient(config);

            // Requesting the speech synthesis. 
            SynthesizeSpeechRequest sreq = new SynthesizeSpeechRequest();
            sreq.Text = answer;
            sreq.Engine = Engine.Neural;
            sreq.OutputFormat = Amazon.Polly.OutputFormat.Mp3;
            sreq.VoiceId = VoiceId.Matthew;

            try
            {
                // Executing the async request.
                SynthesizeSpeechResponse sres = await pc.SynthesizeSpeechAsync(sreq);
                return File(Encoding.UTF8.GetBytes("This worked for some reason"), "text/plain");
            }
            catch (Exception e)
            {
                return File(Encoding.UTF8.GetBytes(e.Message), "text/plain");
            }
        }

        [HttpGet]
        [Route("GetGoogle/{answer}")]
        public async Task<FileContentResult> GoogleTTS(string answer)
        {
            answer = answer.Replace("_", " ");

            RestRequest request = new RestRequest($"https://texttospeech.googleapis.com/v1beta1/text:synthesize?key={GoogleSecretKey}", Method.Post);

            var body = new
            {
                input = new { text = answer },
                voice = new { languageCode = "en-GB", name = "en-GB-Wavenet-A" },
                audioConfig = new { audioEncoding = "MP3_64_KBPS" }
            };
            request.AddJsonBody(body);

            try
            {
                RestResponse response = await Client.ExecuteAsync(request);
                GoogleResponseModel responseModel = JsonConvert.DeserializeObject<GoogleResponseModel>(response.Content);
                byte[] audioStream = Convert.FromBase64String(responseModel.AudioContent);
                return File(audioStream, "audio/mpeg");
            }
            catch (Exception e)
            {
                return File(Encoding.UTF8.GetBytes(e.ToString()), "text/plain");
            }
        }

        // Sha256 hash builder for the input text
        public static string GetHashString(string text) =>
        string.IsNullOrEmpty(text) ? string.Empty : BitConverter.ToString(new SHA256Managed().ComputeHash(System.Text.Encoding.UTF8.GetBytes(text))).Replace("-", string.Empty);





    }
}
