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
  if (path === '/hello') {
    return Promise.resolve(new Response(`Hello World, ${url.searchParams.get('name')}!`, { status: 200 }));
  }
  // Bypass
}
