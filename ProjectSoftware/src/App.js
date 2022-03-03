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
                <div class = "row sticky bg-dark">
                </div>
                {this.$store.state.activePage === 1 && <Consent />}
                {this.$store.state.activePage === 2 && <LanguageModel />}
                {this.$store.state.activePage === 3 && <Evaluation />}
                {this.$store.state.activePage === 4 && <Sumbit />}
            </div>
        );
    },
};
