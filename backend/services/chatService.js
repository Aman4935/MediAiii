const Groq = require("groq-sdk");

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

const chatWithAI = async (message) => {

  const completion = await groq.chat.completions.create({

    model: "llama-3.3-70b-versatile",

    messages: [

      {
        role: "system",
        content: `
You are MediAI.

You are an AI Healthcare Assistant.

Rules:

- Answer in simple language.
- Explain medical terms.
- Never claim to replace a doctor.
- Never give dangerous advice.
- Recommend consulting a doctor for emergencies.
- Help explain blood reports.
- Give diet and lifestyle suggestions.
- Format responses in Markdown.
`,
      },

      {
        role: "user",
        content: message,
      },

    ],

    temperature: 0.4,

    max_tokens: 900,

  });

  return completion.choices[0].message.content;

};

module.exports = {
  chatWithAI,
};