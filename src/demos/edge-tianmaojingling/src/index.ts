
/**
 * Add the necessary event listener
 */
addEventListener('fetch', (event) => {
  const response = handleRequest(event.request);
  if (response) {
    event.respondWith(response);
  }
  // Bypass
});

/**
 * Make a response to client
 */
function handleRequest(request: Request): Promise<Response> | void {
  const url = new URL(request.url);
  const path = url.pathname;

  if (path === '/tianmaojingling') {

    return Promise.resolve(new Response(JSON.stringify({
      "returnCode": "0",
      "returnErrorSolution": "",
      "returnMessage": "",
      "returnValue": {
        "reply": "天气小助手",
        "resultType": "RESULT",
        "executeCode": "SUCCESS"
      }
    }), { status: 200, headers: { 'content-type': 'application/json' } }));

  }
  if (path === '/aligenie/<天猫精灵认证文档>.txt') {
    return Promise.resolve(new Response(`<认证秘钥内容>`, { status: 200 }));
  }
  // Bypass
}
