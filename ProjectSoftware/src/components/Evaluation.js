export default {
    name: "Evaluation",
    data: () => ({

    }),
    methods: {
        sendConsent() {
            this.$store.dispatch("consentToLanguage", this.consent);
        },
    },
    computed: {},
    render() {
        return (
            <div id="consent" class="container">
                <p>Hellow WOrld</p>
            </div>
        );
    },
};
