export default {
    name: "LanguageModel",
    data: () => ({
        storyText: "",
    }),
    methods: {},
    render() {
        return (
            <div class="container">
                <h4 class="display-5">Language Model Interaction</h4>
                <p class="display-6">
                    For the first part of the survey could you please give the model a
                    prompt, for example: A group of archeologists who discover the ruins
                    of Atlantis on a newly-formed volcanic island. Then the model will
                    return a story to you which I would like you to read. Afterward you
                    will rate the story on different factors.
                </p>
                <b-form-textarea
                    id="storyText"
                    vModel={this.storyText}
                    placeholder="Enter a prompt for the language model to use in rendering your story"
                    rows="3"
                ></b-form-textarea>
                <p class="display-6">For the second part of the study could you please chat with this NPC </p>
            </div>
        );
    },
};
