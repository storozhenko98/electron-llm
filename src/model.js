// This file (model.js) contains all the logic for loading the model and running predictions.

class GenerateTextPipeline {
    // NOTE: Replace this with your own task and model
    static task = 'text2text-generation';
    static model = 'Xenova/LaMini-Flan-T5-783M';
    static instance = null;

    static async getInstance(progress_callback = null) {
        if (this.instance === null) {
            // Dynamically import the Transformers.js library
            let { pipeline, env } = await import('@xenova/transformers');

            // NOTE: Uncomment this to change the cache directory
            // env.cacheDir = './.cache';

            this.instance = pipeline(this.task, this.model, { progress_callback });
        }

        return this.instance;
    }
}

// The run function is used by the `transformers:run` event handler.
async function run(event, text) {
    const generator = await GenerateTextPipeline.getInstance();
    console.log('Running model...')
    returnValue = await generator(text, { max_new_tokens: 300 });
    console.log(returnValue)
    return returnValue;
    //return await classifier(text);
}

module.exports = {
    run
}
