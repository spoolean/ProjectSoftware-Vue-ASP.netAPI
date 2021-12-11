<script lang="js">
    import Vue from 'vue'; 

    export default Vue.extend({
        data: {
            consent: false
        },
        methods: {
            sendConsent() {
                this.$store.commit('setConsent', consent);

                if (this.$store.state.consent && this.consent === true) {
                    window.location.href = `${window.location.origin}/home/languagemodel`;
                }
            },
        },
        render() {
            return (
                <div></div>
            );
        }
    });
</script>