// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function completion(req, res) {

  if (req.method === 'POST') {
    const body = req.body
    const prompt = body.prompt || ''

    const AiResponse = "React JS is a UI library for creating UIs..."

    await new Promise((res) => setTimeout(res, 500))

    return res.status(200).json({ result: AiResponse })
  } else {
    return res.status(500).json({ error: { message: "Invalid API Route" } })
  }
}
