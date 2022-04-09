import { BButton, BFormInput, BFormRadioGroup, BFormRating, BRow } from "bootstrap-vue";
import "bootstrap-vue/dist/bootstrap-vue.css";

export default {
    name: "Evaluation",
    data: () => ({
        trailOff: [
            { text: "Did not trail off at all", value: "Did not trail off at all" },
            { text: "Trailed off a little towards the end", value: "Trailed off a little towards the end" },
            { text: "Trailed off a lot towards the end", value: "Trailed off a lot towards the end" },
            { text: "No relation whatsover to the original prompt", value: "No relation whatsover to the original prompt" },
        ],
        errors: [
            { text: "No errors", value: "No errors" },
            { text: "Some errors", value: "Some errors" },
            { text: "Lots of errors", value: "Lots of errors" },
            { text: "Complete gramatical rubbish", value: "Complete gramatical rubbish" },
        ],
        knowledgable: [
            { text: "Not knowledgeable", value: "Not knowledgeable" },
            { text: "Knowledgeable", value: "Knowledgeable" },
            { text: "Very knowledgeable", value: "Very knowledgeable" },
        ],
        engagingStorys: [
            { text: "Can create engaging storys", value: "Can create engaging storys" },
            { text: "Can occasionally create engaging storys", value: "Can occasionally create engaging storys" },
            { text: "Can create non-engaging storys", value: "Can create non-engaging storys" },
        ],
        realisticAnswers: [
            { text: "Can create realistic answers", value: "Can create realistic answers" },
            { text: "Can occasionally create realistic answers", value: "Can occasionally create realistic answers" },
            { text: "Can create non-realistic answers", value: "Can create non-realistic answers" },
            { text: "Answers were not realistic", value: "Answers were not realistic" },
        ],
        couldConverse: [
            { text: "Yes, perfectly well", value: "Yes, perfectly well" },
            { text: "Yes, but not very well", value: "Yes, but not very well" },
            { text: "No, not at all", value: "No, not at all" },
        ],
        canLie: [
            { text: "Yes, the ability to lie would make it more realistic and believable", value: "Yes the ability to lie would make it more realistic and believable" },
            { text: "No, the ability to lie would not make it any more believable", value: "No, the ability to lie would not make it any more believable" },
        ],
        listeningEffortOptions: [
            { text: "No effort required", value: "No effort required" },
            { text: "Some effort required", value: "Some effort required" },
            { text: "Moderate effort required", value: "Moderate effort required" },
            { text: "Effort required", value: "Effort required" },
            { text: "No meaning understood with lots of effort", value: "No meaning understood with lots of effort" }
        ],
        hardToUnderstandOptions: [
            { text: "Never", value: "Never" },
            { text: "Rarely", value: "Rarely" },
            { text: "Sometimes", value: "Sometimes" },
            { text: "Often", value: "Often" },
            { text: "All of the time", value: "All of the time" }
        ],
        voicePace: [
            { text: "Too fast", value: "Too fast" },
            { text: "Just right", value: "Just right" },
            { text: "Too slow", value: "Too slow" }
        ],
        voice3ComparisonOptions: [
            { text: "Much better", vlaue: "Much better" },
            { text: "Slightly better", vlaue: "Slightly better"},
            { text: "No different", value: "No different" },
            { text: "Slightly worse", value: "Slightly worse" },
            { text: "Much worse", value: "Much worse" }
        ],
        voicesOptions: [
            { text: "Voice 1", value: "Voice 1"},
            { text: "Voice 2", value: "Voice 2"},
            { text: "Voice 3", value: "Voice 3"}
        ],
    }),
    methods: {},
    computed: {},
    render() {
        return (
            <div id="consent">
                <BContainer>
                    <h2>Evaluation</h2>
                    <div>
                        <h3>This section is all about the language model text that was created</h3>
                        <h4>Story creation</h4>
                        <label for="trailOff">Did the model stick to the orginal prompt or did it trail off?</label>
                        <BFormRadioGroup class="mb-3" id="trailOff" v-model={this.$store.state.survey.story.trailOff} options={this.trailOff}></BFormRadioGroup>
                        <label for="trailOffReason">If it did not stick to the orriginal prompt, what did it do?</label>
                        <BFormInput class="mb-3" id="prompt1" v-model={this.$store.state.survey.story.trailOffReason}></BFormInput>
                        <label for="errors">Did the model make any errors?</label>
                        <BFormRadioGroup class="mb-3" id="errors" v-model={this.$store.state.survey.story.errors} options={this.errors}></BFormRadioGroup>
                        <label for="knowledgable">Was the model knowledgable?</label>
                        <BFormRadioGroup class="mb-3" id="knowledgable" v-model={this.$store.state.survey.story.knowledgable} options={this.knowledgable}></BFormRadioGroup>
                        <label for="engagingStorys">Rembering that the model can be trained, do you think that it could create engaging storys?</label>
                        <BFormRadioGroup class="mb-3" id="engagingStorys" v-model={this.$store.state.survey.story.engagingStorys} options={this.engagingStorys}></BFormRadioGroup>
                        <label for="prompt1">Please copy and paste your response from prompt 1</label>
                        <BFormInput class="mb-3" id="prompt1" v-model={this.$store.state.survey.story.prompt1}></BFormInput>
                        <label for="prompt2">Please copy and paste your response from prompt 2</label>
                        <BFormInput class="mb-3" id="prompt2" v-model={this.$store.state.survey.story.prompt2}></BFormInput>
                        <label for="prompt3">Please copy and paste your response from prompt 3</label>
                        <BFormInput class="mb-3" id="prompt3" v-model={this.$store.state.survey.story.prompt3}></BFormInput>

                        <h4>NPC chat</h4>
                        <label for="realisticAnswers">Did the model give realistic answers?</label>
                        <BFormRadioGroup class="mb-3" id="realisticAnswers" v-model={this.$store.state.survey.chat.realisticAnswers} options={this.realisticAnswers}></BFormRadioGroup>
                        <label for="couldConverse">Remebering that the bot can be trained, do you think that it could converse with the player in a game?</label>
                        <BFormRadioGroup class="mb-3" id="couldConverse" v-model={this.$store.state.survey.chat.couldConverse} options={this.couldConverse}></BFormRadioGroup>
                        <label for="canLie"> If the bot could lie, do you think it would make it a more believable character?</label>
                        <BFormRadioGroup class="mb-3" id="canLie" v-model={this.$store.state.survey.chat.canLie} options={this.canLie}></BFormRadioGroup>
                        <p></p>
                    </div> 
                    <div>
                        <h3>This section is all about Voice 1</h3>
                        <label for="overallRating">How would you rate the overall quality of the voice?</label>
                        <BFormRating class="mb-3" id="overallRating" v-model={this.$store.state.survey.voice1.overallRating}></BFormRating>
                        <label for="listeningEffort">How much effort was required to listen to the voice?</label>
                        <BFormRadioGroup class="mb-3" id="listeningEffort" v-model={this.$store.state.survey.voice1.listeningEffort} options={this.listeningEffortOptions}></BFormRadioGroup>
                        <label for="hardToUnderstand">Did you find any words hard to understand?</label>
                        <BFormRadioGroup class="mb-3" id="hardToUnderstand" v-model={this.$store.state.survey.voice1.hardToUnderstand} options={this.hardToUnderstandOptions}></BFormRadioGroup>
                        <label for="whichWords">Which words were they?</label>
                        <BFormInput class="mb-3" id="whichWords" v-model={this.$store.state.survey.voice1.whichWords}></BFormInput>
                        <label for="voicePace">Was the voice the right pace for you to understand?</label>
                        <BFormRadioGroup class="mb-3" id="voicePace" v-model={this.$store.state.survey.voice1.voicePace} options={this.voicePace}></BFormRadioGroup>
                        <label for="voiceComparison">In comparrison to voice 3 how much better or worse was this voice?</label>
                        <BFormRadioGroup class="mb-3" id="voiceComparison" v-model={this.$store.state.survey.voice1.voice3Comparison} options={this.voice3ComparisonOptions}></BFormRadioGroup>
                    </div>
                    <div>
                        <h3>This section is all about Voice 2</h3>
                        <label for="overallRating2">How would you rate the overall quality of the voice?</label>
                        <BFormRating class="mb-3" id="overallRating2" v-model={this.$store.state.survey.voice2.overallRating}></BFormRating>
                        <label for="listeningEffort2">How much effort was required to listen to the voice?</label>
                        <BFormRadioGroup class="mb-3" id="listeningEffort2" v-model={this.$store.state.survey.voice2.listeningEffort} options={this.listeningEffortOptions}></BFormRadioGroup>
                        <label for="hardToUnderstand2">Did you find any words hard to understand?</label>
                        <BFormRadioGroup class="mb-3" id="hardToUnderstand2" v-model={this.$store.state.survey.voice2.hardToUnderstand} options={this.hardToUnderstandOptions}></BFormRadioGroup>
                        <label for="whichWords2">Which words were they?</label>
                        <BFormInput class="mb-3" id="whichWords2" v-model={this.$store.state.survey.voice2.whichWords}></BFormInput>
                        <label for="voicePace2">Was the voice the right pace for you to understand?</label>
                        <BFormRadioGroup class="mb-3" id="voicePace2" v-model={this.$store.state.survey.voice2.voicePace} options={this.voicePace}></BFormRadioGroup>
                        <label for="voiceComparison2">In comparrison to voice 3 how much better or worse was this voice?</label>
                        <BFormRadioGroup class="mb-3" id="voiceComparison2" v-model={this.$store.state.survey.voice2.voice3Comparison} options={this.voice3ComparisonOptions}></BFormRadioGroup>
                    </div>
                    <div>
                        <h3>All the voices</h3>
                        <label for="preferredVoice">Of the 3 voices, which did you prefer?</label>
                        <BFormRadioGroup class="mb-3" id="preferredVoice" v-model={this.$store.state.survey.voices.preferredVoice} options={this.voicesOptions}></BFormRadioGroup>
                        <label for="preferredReason">Why?</label>
                        <BFormInput class="mb-3" id="preferredReason" v-model={this.$store.state.survey.voices.preferredVoiceReason}></BFormInput>
                        <label for="clearestVoice">Which of the three voices was the clearest</label>
                        <BFormRadioGroup class="mb-3" id="clearestVoice" v-model={this.$store.state.survey.voices.clearestVoice} options={this.voicesOptions}></BFormRadioGroup>
                    </div>
                    <BRow>
                        <BButton variant="success" class="mb-3" on-click={() => { this.$store.dispatch("forward"); }}>To Submit</BButton>
                    </BRow>
                </BContainer>
            </div>
        );
    },
};
