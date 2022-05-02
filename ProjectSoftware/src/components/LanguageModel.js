import { BButton, BCol, BContainer, BDropdown, BDropdownItemButton, BFormTextarea, BRow, BSpinner } from "bootstrap-vue"

export default {
    name: "LanguageModel",
    data: () => ({
        placeholder: "Give the bot a prompt"
    }),
    methods: {
        evaluate() {
            this.$store.dispatch("changePage", 3)
        }
    },
    computed: {},
    render() {
        return (
            <div>
                <BContainer>
                    <BContainer>
                        <p>This is the langauge model. I would like you to please give the model a prompt, some example prompts have been given to you below. It will complete the prompt you have given it and is good for finishing stories. Please pay atteniton to the responses it gives and if it ever sticks, clear it and try again.</p>
                    </BContainer>
                    <BRow>
                        <BContainer class="mb-3">
                            <BRow aligns-h="between">
                                <BCol>Story Model</BCol>
                                <BCol>
                                    <BDropdown text="Example Prompts" class="dropdown">
                                        <BDropdownItemButton on-click={() => { this.$store.state.model1 = this.$store.state.prompt1; }}>Prompt 1</BDropdownItemButton>
                                        <BDropdownItemButton on-click={() => { this.$store.state.model1 = this.$store.state.prompt2; }}>Prompt 2</BDropdownItemButton>
                                        <BDropdownItemButton on-click={() => { this.$store.state.model1 = this.$store.state.prompt3; }}>Prompt 3</BDropdownItemButton>
                                    </BDropdown>
                                </BCol>
                                <BCol><BButton on-click={() => { this.$store.state.model1 = ""; }}>Clear</BButton></BCol>
                            </BRow>
                            <BRow>
                                <BFormTextarea
                                    id="Model1"
                                    v-model={this.$store.state.model1}
                                    placeholder={this.placeholder}
                                    rows="8"
                                ></BFormTextarea>
                            </BRow>
                            <BRow>
                                <BButton on-click={() => { this.$store.dispatch("sendPrompt", 1) }}>AI Response</BButton>
                                {this.$store.state.loading && <BSpinner />}
                            </BRow>
                            <BRow>
                                <BDropdown text="Voice to generate">
                                    <BDropdownItemButton on-click={() => { this.$store.dispatch("sendTTS", { model: 1, tts: 0, engine: 0 }); }}>Voice 1</BDropdownItemButton>
                                    <BDropdownItemButton on-click={() => { this.$store.dispatch("sendTTS", { model: 1, tts: 1, engine: 1 }); }}>Voice 2</BDropdownItemButton>
                                    <BDropdownItemButton on-click={() => { this.$store.dispatch("sendTTS", { model: 1, tts: 1, engine: 0 }); }}>Voice 3</BDropdownItemButton>
                                </BDropdown>
                            </BRow>
                        </BContainer>
                        <button
                            type="button"
                            class="btn btn-success"
                            vOn:click={this.evaluate}
                        >
                            To Chat Model
                        </button>
                    </BRow>
                </BContainer>
                
            </div>
        );
    },
};
