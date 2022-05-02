import { BButton, BContainer, BModal } from "bootstrap-vue";

export default {
    name: "Consent",
    data: () => ({
    }),
    methods: {
        // This function sends the user from the consent page to the LanguageModel page
        sendConsent() {
            // Dispatch the action that will change the page
            this.$store.dispatch("changePage", 2);
        }
    },
    computed: {},
    render() {
        return (
            <div id="consent">
                <BContainer>
                    <div>
                        <h2>Can language models and speech synthesis produce believable Non-Player-Characters (NPCs) to use in games?</h2>
                        <h5>An undergraduate study for the Universtiy Of Lincoln by James Roche 19704410</h5>
                        <p>Hi there, thankyou for taking the time to take part in my study. I am looking into how Generative Pre-trained Transformers and text-to-speech services can be used by games developers to replace voice acted Non-Player entities.</p>
                        <p>In the next couple of pages you will interact with these language models and hear the voice syntesis for them. Imagine they are a character in a game or the story for a game.</p>
                        <p>These models can be made more specific by giving them information for which they can be trained on. This allows them to gain knowledge on specific scenarios, but in this instance they are very general.</p>
                        <p>By taking part in this study you consent to allow me to use your responses in my research and to produce conclussions of said data. You can read the whole consent form here</p>
                        <BButton v-b-modal="ConsentModal" class="mb-3">Show Consent</BButton>
                    </div>
                    <div class="row">
                        <button
                            type="button"
                            class="btn btn-success"
                            vOn:click={this.sendConsent}
                        >
                            Give Consent
                        </button>
                    </div>
                    <BModal id="ConsentModal" title="Consent">
                        <p>Your data will be stored and annonymised on a Microsoft Azure server, and will only be stored at the very end of this survey once you click submit.</p>
                        <p>Once you have submitted your data it is impossible to ask for it back or to be removed from the study as it will be anonymous. Your data may be kept in the Universtiy of Lincoln after the study has concluded and may be used by other academics for research.</p>
                        <p>Conclusions will be drawn and your responses maybe directly quoted in the report. The dissertation may be put up by the University where you can see the results of your help.</p>
                        <p>Thank you so much for giving me your time, I greatly apreciate it.</p>
                    </BModal>
                </BContainer>
            </div>
        );
    },
};
