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
                <b-row class="m-1 text-center">
                    <b-col><b-row><b-button on-click={() => { this.$store.dispatch("backward"); }}><b-icon icon="arrow-left"></b-icon></b-button></b-row></b-col>
                    <b-col cols="10">
                        <b-row>
                            <b-col><b-button on-click={() => { this.$store.dispatch("changePage", 1); }}>Consent</b-button></b-col>
                            <b-col><b-button on-click={() => { this.$store.dispatch("changePage", 2); }}>Model</b-button></b-col>
                            <b-col><b-button on-click={() => { this.$store.dispatch("changePage", 3); }}>Evaluation</b-button></b-col>
                            <b-col><b-button on-click={() => { this.$store.dispatch("changePage", 4); }}>Submit</b-button></b-col>
                        </b-row>
                    </b-col>
                    <b-col><b-row><b-button on-click={() => { this.$store.dispatch("forward"); }}><b-icon icon="arrow-right"></b-icon></b-button></b-row></b-col>
                </b-row>

                {/* Dynamically render each page/component based off the page number */}
                {this.$store.state.activePage === 1 && <Consent />}
                {this.$store.state.activePage === 2 && <LanguageModel />}
                {this.$store.state.activePage === 3 && <Evaluation />}
                {this.$store.state.activePage === 4 && <Submit />}
            </div>
        );
    },
};
