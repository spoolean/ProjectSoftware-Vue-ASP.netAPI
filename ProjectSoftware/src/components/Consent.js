export default {
    name: "Consent",
    data: () => ({
        consent: false,
    }),
    methods: {
        sendConsent() {
            this.$store.dispatch("consentToLanguage", this.consent);
        },
    },
    computed: {},
    render() {
        return (
            <div id="consent" class="container">
                <h3 class="display-3">
                    Undergraduate study on deep-neural langauge models and speech
                    synthesis
                </h3>
                <h6 class="display-6">
                    by James Roche (19704410), Undergraduate at the University Of Lincoln
                </h6>
                <p>
                    Hi. My name is James Roche. Thank you so much for taking the time to
                    take part in my survey. I am researching whether or not deep machine
                    learnt language models and speech synthesis can replace story writers
                    and voice actors for games scripts and non-player characters
                    respectively.{" "}
                </p>
                <p>
                    What I would like you to do is to interact with some variations of
                    these models and rate them after your interaction. You will give a
                    prompt to the language model for example: “Mary has 17 children, and
                    she is late for work, she is very close to being fired”, and the model
                    will return a story that it has created based off this prompt. You
                    will also have a conversation with the model to replicate talking to a
                    NPC. After this you will rate the model based off a variety of
                    parameters. It shouldn’t take you too long, but I ask that you do not
                    use any profanity or try to use the system in any malicious way.{" "}
                </p>
                <p>
                    This bit is very important: you have the right to withdraw your
                    consent up until the point you submit your data at the end of this
                    website. After this point your data will be anonymised and you will
                    not be able to remove it from the study. If at any time you want to
                    withdraw your consent whilst on this website, just close the tab and
                    you will not have submitted anything to me. You can read the full
                    intent of this study and consent here.
                </p>
                <p>
                    If you choose to take part in my study after reading the above, thank
                    you so much for your time it is greatly appreciated.{" "}
                </p>
                <p>
                    I give consent to take part in this study and I am informed I can
                    withdraw up until sending my data to the student’s University OneDrive
                    account, I need simply leave this page.{" "}
                </p>
                <b-form-checkbox
                    id="checkbox-1"
                    vModel={this.consent}
                    name="checkbox-1"
                    value={true}
                    unchecked-value={false}
                >
                    I accept the terms and use
                </b-form-checkbox>
                <div class="row">
                    <button
                        type="button"
                        class="btn btn-success"
                        vOn:click={this.sendConsent}
                    >
                        Give Consent
                    </button>
                </div>
            </div>
        );
    },
};
