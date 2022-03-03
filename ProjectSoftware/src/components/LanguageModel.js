import { BButton, BCol, BContainer, BDropdown, BDropdownItemButton, BFormTextarea, BRow } from "bootstrap-vue"

export default {
    name: "LanguageModel",
    data: () => ({
        placeholder: "Give the bot a prompt"
    }),
    methods: {},
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
                                <BButton on-click={() => {this.$store.dispatch("sendPrompt")}}>AI Response</BButton>
                            </BRow>
                            <BRow>
                                <BDropdown text="Voice to generate">
                                    <BDropdownItemButton>Voice 1</BDropdownItemButton>
                                    <BDropdownItemButton>Voice 2</BDropdownItemButton>
                                    <BDropdownItemButton>Voice 3</BDropdownItemButton>
                                </BDropdown>
                            </BRow>
                        </BCol>
                        <BCol>
                            <BRow>

                            </BRow>
                            <BRow>

                            </BRow>
                            <BRow>

                            </BRow>
                        </BCol>
                    </BRow>
                </BContainer>
            </div>
        );
    },
};
