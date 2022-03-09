import { BFormRating } from "bootstrap-vue";

export default {
    name: "Evaluation",
    data: () => ({}),
    methods: {},
    computed: {},
    render() {
        return (
            <div id="consent">
                <BContainer>
                    <BFormRating v-model={this.$store.state.survey.rating}></BFormRating>
                </BContainer>
            </div>
        );
    },
};
