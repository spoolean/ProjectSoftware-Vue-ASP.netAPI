import { BButton, BCol, BContainer, BDropdown, BDropdownItemButton, BFormTextarea, BRow } from "bootstrap-vue"

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
                        <p>This is the testing ground. I would like you to play with the language model in these two forms. The left is a story completion model where you give it a prompt and it will finish it. There are some suggestions you could try. The one on the right is a chat model aimed at emulating the communication between you and an npc. Use the voices to hear what the model generates. You can always come back to this section with the buttons above.</p>
                    </BContainer>
                    <BRow>
                        <BCol md="6">
                            <BContainer class="mb-3">
                                <BRow aligns-h="between">
                                    <BCol>Story Model</BCol>
                                    <BCol>
                                        <BDropdown text="Prompts">
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
                                </BRow>
                                <BRow>
                                    <BDropdown text="Voice to generate">
                                        <BDropdownItemButton on-click={() => { this.$store.dispatch("sendTTS", { model: 1, tts: 0, engine: 0 }); }}>Voice 1</BDropdownItemButton>
                                        <BDropdownItemButton on-click={() => { this.$store.dispatch("sendTTS", { model: 1, tts: 1, engine: 1 }); }}>Voice 2</BDropdownItemButton>
                                        <BDropdownItemButton on-click={() => { this.$store.dispatch("sendTTS", { model: 1, tts: 1, engine: 0 }); }}>Voice 3</BDropdownItemButton>
                                    </BDropdown>
                                </BRow>
                            </BContainer>
                        </BCol>
                        <BCol md="6">
                            <BContainer>
                                <BRow aligns-h="between">
                                    <BCol cols="10">This is the chat model. </BCol>
                                    <BCol cols="1"><BButton on-click={() => { this.$store.state.model2 = ""; }}>Clear</BButton></BCol>
                                </BRow>
                                <BRow>
                                    <BFormTextarea
                                        id="Model1"
                                        v-model={this.$store.state.model2}
                                        placeholder={this.placeholder}
                                        rows="8"
                                    ></BFormTextarea>
                                </BRow>
                                <BRow>
                                    <BButton on-click={() => { this.$store.dispatch("sendPrompt", 2) }}>AI Response</BButton>
                                </BRow>
                                <BRow>
                                    <BDropdown text="Voice to generate">
                                        <BDropdownItemButton on-click={() => { this.$store.dispatch("sendTTS", { model: 1, tts: 0, engine: 0 }); }}>Voice 1</BDropdownItemButton>
                                        <BDropdownItemButton on-click={() => { this.$store.dispatch("sendTTS", { model: 1, tts: 1, engine: 1 }); }}>Voice 2</BDropdownItemButton>
                                        <BDropdownItemButton on-click={() => { this.$store.dispatch("sendTTS", { model: 1, tts: 1, engine: 0 }); }}>Voice 3</BDropdownItemButton>
                                    </BDropdown>
                                </BRow>
                            </BContainer>
                        </BCol>
                        <button
                            type="button"
                            class="btn btn-success mt-3"
                            vOn:click={this.evaluate}
                        >
                            To Survey
                        </button>
                    </BRow>
                </BContainer>
                
            </div>
        );
    },
};
