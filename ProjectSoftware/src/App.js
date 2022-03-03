import Consent from "./components/Consent.js";
import LanguageModel from "./components/LanguageModel.js";
import Evaluation from "./components/Evaluation.js";
import Submit from "./components/Submit.js";

export default {
    name: "App",
    components: {
        Consent,
        LanguageModel,
        Evaluation,
        Submit
    },
    methods: {},
    computed: {},
    render() {
        return (
            <div>
                {/* This is the pages navigation bar so users can move about the application*/}
                <BRow class="m-1 text-center">
                    <BCol><BRow><BButton on-click={() => { this.$store.dispatch("backward"); }}><BIcon icon="arrow-left"></BIcon></BButton></BRow></BCol>
                    <BCol cols="10">
                        <BRow>
                            <BCol><BButton on-click={() => { this.$store.dispatch("changePage", 1); }}>Consent</BButton></BCol>
                            <BCol><BButton on-click={() => { this.$store.dispatch("changePage", 2); }}>Model</BButton></BCol>
                            <BCol><BButton on-click={() => { this.$store.dispatch("changePage", 3); }}>Evaluation</BButton></BCol>
                            <BCol><BButton on-click={() => { this.$store.dispatch("changePage", 4); }}>Submit</BButton></BCol>
                        </BRow>
                    </BCol>
                    <BCol><BRow><BButton on-click={() => { this.$store.dispatch("forward"); }}><BIcon icon="arrow-right"></BIcon></BButton
                        ></BRow></BCol>
                </BRow>

                {/* Dynamically render each page/component based off the page number */}
                {this.$store.state.activePage === 1 && <Consent />}
                {this.$store.state.activePage === 2 && <LanguageModel />}
                {this.$store.state.activePage === 3 && <Evaluation />}
                {this.$store.state.activePage === 4 && <Submit />}
            </div>
        );
    },
};