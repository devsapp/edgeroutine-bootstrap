import { OpenAIStream, OpenAIStreamPayload } from "./OpenAIStream";
/**
 * Add the necessary event listener
 */
addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request));
});

/**
 * Make a response to client
 */
async function handleRequest(request: Request): Promise<Response> {
  const url = new URL(request.url);
  let reqData: any = {};
  try {
    const reqText = await request.text();
    reqData = JSON.parse(reqText);
  } catch (e) {

  }
  const path = url.pathname;
  if (path === '/gpt') {
    const payload: OpenAIStreamPayload = {
      model: "text-davinci-003",
      prompt: reqData.prompt || '',
      stream: true,
      max_tokens: 2048,
    };
    const stream = await OpenAIStream(payload);
    return new Response(stream);

  } else {
    const data = {
      info: "请访问 /gpt 获取数据"
    }
    return new Response(JSON.stringify(data, null, 2), {
      headers: {
        "content-type": "application/json;charset=UTF-8"
      }
    });
  }
  // Bypass
}


