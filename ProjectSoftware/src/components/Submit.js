import { BButton, BContainer } from "bootstrap-vue"

export default {
    name: "Submit",
    data: () => ({
    }),
    methods: {},
    render() {
        return (
            <div>
                <BContainer>
                    <p>You understand that after you submit you are no longer able to retrieve your data as it is annoymised on the server </p>
                    <BButton on-click={() => { this.$store.dispatch("submitResponse"); }}>Submit response</BButton>
                </BContainer>
            </div>
        );
    },
};
