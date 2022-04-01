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
                    <h3>Thank you</h3>
                    <p class="mb-6">Again, thankyou for taking the time to take part in my study it is very helpful to my undergraduate degree.</p>
                    <p>You understand that after you submit you are no longer able to retrieve your data as it is annoymised on the server.</p>
                    <BButton on-click={() => { this.$store.dispatch("submitResponse"); }}>Submit responses</BButton>
                </BContainer>
            </div>
        );
    },
};
