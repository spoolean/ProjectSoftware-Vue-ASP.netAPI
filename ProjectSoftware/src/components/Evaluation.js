import { BFormInput, BFormRadioGroup, BFormRating } from "bootstrap-vue";
import "bootstrap-vue/dist/bootstrap-vue.css";

export default {
    name: "Evaluation",
    data: () => ({
        listeningEffortOptions: [
            { text: "No effort required", value: 'first' },
            { text: "Some effort required", value: 'second' },
            { text: "Moderate effort required", value: 'third' },
            { text: "Effort required", value: 'fourth' },
            { text: "No meaning understood with lots of effort", value: 'fifth' }    
        ],
        hardToUnderstandOptions: [
            { text: "Never", value: 'first' },
            { text: "Rarely", value: 'second' },
            { text: "Sometimes", value: 'third' },
            { text: "Often", value: 'fourth' },
            { text: "All of the time", value: 'fifth' }
        ],
        voicePace: [
            { text: "Too fast", value: 'first' },
            { text: "Just right", value: 'second' },
            { text: "Too slow", value: 'third' }
        ],
        voice3ComparisonOptions: [
            { text: "Much better", value: 'first' },
            { text: "Slightly better", value: 'second' },
            { text: "No different", value: 'third' },
            { text: "Slightly worse", value: 'fouth' },
            { text: "Much worse", value: 'fifth' }
        ],
        voicesOptions: [
            { text: "Voice 1", value: 'first' },
            { text: "Voice 2", value: 'second' },
            { text: "Voice 3", value: 'third' }
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
                        <h4>NPC chat</h4>
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
                    
                </BContainer>
            </div>
        );
    },
};
