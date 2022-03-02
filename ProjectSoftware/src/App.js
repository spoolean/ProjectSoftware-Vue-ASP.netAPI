import Consent from "./components/Consent.js";
import LanguageModel from "./components/LanguageModel.js";
import Evaluation from "./components/Evaluation.js"

export default {
    name: "App",
    components: {
        Consent,
        LanguageModel,
        Evaluation,
    },
    methods: {},
    computed: {},
    render() {
        return (
            <div>
                <div>
                    <b-navbar toggleable="lg" type="dark" variant="info" sticky="true">

                    </b-navbar>
                </div>
                {this.$store.state.activePane === "consent" && <Consent />}
                {this.$store.state.activePane === "languageModel" && <LanguageModel />}
                {this.$store.state.activePane === "evaluation" && <Evaluation />}
            </div>
            // <div class="container-fluid">

            //     {/* <Consent />
            //     <div>
            //         <b-button>Button</b-button>
            //         <b-button variant="danger">Button</b-button>
            //         <b-button variant="success">Button</b-button>
            //         <b-button variant="outline-primary">Button</b-button>
            //     </div> */}
            // </div>
        );
    },
};
