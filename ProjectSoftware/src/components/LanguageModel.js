import { BButton, BCol, BContainer, BDropdown, BDropdownItemButton, BFormTextarea, BRow } from "bootstrap-vue"

export default {
    name: "LanguageModel",
    data: () => ({
        placeholder: "Give the bot a prompt"
    }),
    methods: {

    },
    computed: {},
    render() {
        return (
            <div>
                <BContainer>
                    The Language models to interact with
                    <BRow>
                        <BCol>
                            <BRow aligns-h="between">
                                <BCol cols="10">This is the story model for you to interact with</BCol>
                                <BCol cols="1"><BButton on-click={() => { this.$store.state.model1 = ""; }}>Clear</BButton></BCol>
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
                                <BButton on-click={() => {this.$store.dispatch("sendPrompt", 1) }}>AI Response</BButton>
                            </BRow>
                            <BRow>
                                <BDropdown text="Voice to generate">
                                    <BDropdownItemButton on-click={() => { this.$store.dispatch("sendTTS", { model: 1, tts: 0 }); }}>Voice 1</BDropdownItemButton>
                                    <BDropdownItemButton on-click={() => { this.$store.dispatch("sendTTS", { model: 1, tts: 1 }); }}>Voice 2</BDropdownItemButton>
                                    <BDropdownItemButton on-click={() => { this.$store.dispatch("sendTTS", { model: 1, tts: 2 }); }}>Voice 3</BDropdownItemButton>
                                    <BDropdownItemButton on-click={() => { this.$store.dispatch("sendTTS", { model: 1, tts: 3 }); }}>Voice 3</BDropdownItemButton>
                                </BDropdown>
                            </BRow>
                        </BCol>
                        <BCol>
                            <BRow aligns-h="between">
                                <BCol cols="10">This is the story model for you to interact with</BCol>
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
                                    <BDropdownItemButton>Voice 1</BDropdownItemButton>
                                    <BDropdownItemButton>Voice 2</BDropdownItemButton>
                                    <BDropdownItemButton>Voice 3</BDropdownItemButton>
                                </BDropdown>
                            </BRow>
                        </BCol>
                    </BRow>
                </BContainer>
            </div>
        );
    },
};
