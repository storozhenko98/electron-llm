
const generate = async () => {
    let { pipeline } = await import('@xenova/transformers');
    const generator = await pipeline('text2text-generation', 'Xenova/LaMini-Flan-T5-783M');
    const output = await generator('What is Being?', { max_new_tokens: 100 });
    console.log(output);

}

generate();