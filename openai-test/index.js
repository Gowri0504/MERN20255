require('dotenv').config();
const OpenAI = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // safely read from .env
});

async function runExample() {
  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo', // or 'gpt-4' if you have access
    messages: [
      { role: 'user', content: 'What is the capital of France?' },
    ],
  });

  console.log('ChatGPT:', response.choices[0].message.content);
}

runExample();
