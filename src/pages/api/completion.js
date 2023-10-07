
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
});

export default async function completion(req, res) {
  if (req.method === "POST") {

    try {
      const openai = new OpenAIApi(configuration);
      const completion = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
          {"role": "system", "content": "You are a helpful assistant."},
          {"role": "user", "content": "What are some famous astronomical observatories?"}
        ]
      )

      const aiResponse = (completion.data.choices[0].text).trim();
      return res.status(200).json({result: aiResponse});
    } catch(e) {
      console.log(e.message);
      return res.status(500).json({error: {message: e.message}});
    }
  } else {
    return res.status(500).json({error: {message: "Invalid Api Route"}})
  }
}