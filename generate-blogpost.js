import cohere from 'cohere-ai';
import ora from 'ora';

const spinner = ora('Generating...').start();

cohere.init('YEOAnCq3UYyFl053zheDuzndM3k9LYvuPV2t5SA0');

const start = performance.now();

const interval = setInterval(() => {
  const time = Math.round((performance.now() - start) / 1000);
  spinner.text = `Generating... ${time}s`;
}, 1000);

const prompt =
  'Generate a list of 5 technical interview questions for a trainer/junior frontend engineer. Do not include answers.';

const response = await cohere.generate({
  model: 'command-xlarge-nightly',
  prompt: prompt,
  max_tokens: 500,
  temperature: 1.0,
  k: 0,
  p: 1,
  frequency_penalty: 0,
  presence_penalty: 0,
  stop_sequences: [],
  return_likelihoods: 'NONE',
});

const time = Math.round((performance.now() - start) / 1000);
spinner.succeed(`Done on ${time}s}`);
clearInterval(interval);

const { generations } = response.body;

console.log(generations[0].text);
