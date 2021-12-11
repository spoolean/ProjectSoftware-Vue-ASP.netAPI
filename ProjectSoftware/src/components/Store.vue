<script lang="js">
    import Vuex from 'vuex';

    export default Vuex.Store({
        state: {
            consent: false,
        },
        mutations: {
            setConsent(state, consent) {
                state.consent = consent;
            }
        },
        actions: {

        }
    });
</script>