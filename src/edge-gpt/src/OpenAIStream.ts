const API_KEY = ''; // 输入你的OpenApiKey

export interface OpenAIStreamPayload {
    model: string;
    prompt: string;
    temperature?: number;
    top_p?: number;
    frequency_penalty?: number;
    presence_penalty?: number;
    max_tokens: number;
    stream: boolean;
    n?: number;
}

export async function OpenAIStream(payload: OpenAIStreamPayload) {


    const res = await fetch("https://api.openai.com/v1/completions", {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${API_KEY}`,
        },
        method: "POST",
        body: JSON.stringify(payload),
    });


    return res.body;

}
