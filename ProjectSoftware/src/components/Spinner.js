import { BSpinner } from "bootstrap-vue"

export default {
    name: "Spinner",
    render() {
        return (
            <div>
                <BSpinner label="loading..."></BSpinner>
            </div>
        );
    }
};
