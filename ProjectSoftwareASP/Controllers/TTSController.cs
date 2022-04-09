﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Text;
using System.Security.Cryptography;
using Microsoft.CognitiveServices.Speech;
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
        /// <param name="engine"></param>
        /// <returns>byte[] audioStream</returns>
        [HttpGet]
        [Route("GetAzure")]
        public async Task<FileContentResult> AzureTTS(string answer, string engine)
        {
            answer = answer.Replace("_", " ");

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

        /// <summary>
        /// Generates Google neural and standard voices.
        /// The byte[] generated by the api is returned as an audio file.
        /// </summary>
        /// <param name="answer"></param>
        /// <param name="engine"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("GetGoogle")]
        public async Task<FileContentResult> GoogleTTS(string answer, string engine)
        {
            // Remove the underscores.
            answer = answer.Replace("_", " ");

            // Switcher for which engine to use. 
            if (engine == "neural") { engine = "Wavenet"; }
            else if (engine == "standard") { engine = "Standard"; }

            RestRequest request = new RestRequest($"https://texttospeech.googleapis.com/v1beta1/text:synthesize?key={GoogleSecretKey}", Method.Post);

            // Compose the body of the request with the required parameters.
            var body = new
            {
                input = new { text = answer },
                voice = new { languageCode = "en-GB", name = $"en-GB-{engine}-A" },
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
                return File(Encoding.UTF8.GetBytes(e.Message), "text/plain");
            }
        }
    }
}
