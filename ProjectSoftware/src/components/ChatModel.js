import { BButton, BCol, BContainer, BDropdown, BDropdownItemButton, BFormTextarea, BRow, BSpinner } from "bootstrap-vue"

export default {
    name: "ChatModel",
    data: () => ({
        placeholder: "Give the bot a prompt"
    }),
    methods: {
        evaluate() {
            this.$store.dispatch("changePage", 4)
        }
    },
    computed: {},
    render() {
        return (
            <div>
                <BContainer>
                    <BContainer>
                        <p>This is the chat model, I would like you to communicate with the model as if you were communicating with a chatbot. </p>
                    </BContainer>
                    <BRow>
                        <BContainer class="mb-3">
                            <BRow aligns-h="between">
                                <BCol cols="10">Chat model. </BCol>
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
                                    <BDropdownItemButton on-click={() => { this.$store.dispatch("sendTTS", { model: 2, tts: 0, engine: 0 }); }}>Voice 1</BDropdownItemButton>
                                    <BDropdownItemButton on-click={() => { this.$store.dispatch("sendTTS", { model: 2, tts: 1, engine: 1 }); }}>Voice 2</BDropdownItemButton>
                                    <BDropdownItemButton on-click={() => { this.$store.dispatch("sendTTS", { model: 2, tts: 1, engine: 0 }); }}>Voice 3</BDropdownItemButton>
                                </BDropdown>
                            </BRow>
                        </BContainer>
                        <button
                            type="button"
                            class="btn btn-success"
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
