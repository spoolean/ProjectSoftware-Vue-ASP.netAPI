import { BButton, BContainer, BSpinner } from "bootstrap-vue"

export default {
    name: "Submit",
    data: () => ({}),
    methods: {
        submit() {
            if (!this.$store.state.submitted) {
                this.$store.dispatch("submitResponse");
                this.$store.state.submitted = true;
            }
        }
    },
    render() {
        return (
            <div>
                <BContainer>
                    <h3>Thank you</h3>
                    <p class="mb-6">Again, thankyou for taking the time to take part in my study it is very helpful to my undergraduate degree.</p>
                    <p>You understand that after you submit you are no longer able to retrieve your data as it is annoymised on the server.</p>
                    <BButton on-click={() => { this.submit(); }}>Submit responses</BButton>
                    {this.$store.state.loading === true && <BSpinner label="loading..." />}
                    {this.$store.state.submitted === true && <p>Thank you for submitting your responses you may leave this page</p>}
                </BContainer>
            </div>
        );
    },
};
