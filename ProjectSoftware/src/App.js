import Consent from "./components/Consent.js";
import LanguageModel from "./components/LanguageModel.js";
import ChatModel from "./components/ChatModel.js";
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
                <BRow class="justify-content-around m-1 text-center">
                    <BCol class="col-sm-2"><BRow><BButton on-click={() => { this.$store.dispatch("backward"); }}><BIcon icon="arrow-left"></BIcon></BButton></BRow></BCol>
                    <BCol class="col-sm-2 ml-auto"><BRow><BButton on-click={() => { this.$store.dispatch("forward"); }}><BIcon icon="arrow-right"></BIcon></BButton></BRow></BCol>
                </BRow>

                {/* Dynamically render each page/component based off the page number */}
                {this.$store.state.activePage === 1 && <Consent />}
                {this.$store.state.activePage === 2 && <LanguageModel />}
                {this.$store.state.activePage === 3 && <ChatModel />}
                {this.$store.state.activePage === 4 && <Evaluation />}
                {this.$store.state.activePage === 5 && <Submit />}
                
            </div>
        );
    },
};