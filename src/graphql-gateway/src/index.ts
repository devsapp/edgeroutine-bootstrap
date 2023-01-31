import { server as graphqlServer } from './graphql-server';

import rawPlaygroundHTML from './graphql-playground/index.html';

/**
 * Start Apollo GraphQL server.
 */
graphqlServer.start().then(() => {
  graphqlServer.listen();
});

/**
 * Add the necessary event listener.
 */
addEventListener('fetch', (event) => {
  const response = handleRequest(event.request);
  if (response) {
    event.respondWith(response);
  }
  // Bypass
});

/**
 * Make a response to client.
 */
function handleRequest(request: Request): Promise<Response> | void {
  const url = new URL(request.url);
  const path = url.pathname;
  if (request.method === 'GET' && path === '/graphql') {
    return Promise.resolve(new Response(rawPlaygroundHTML, { status: 200, headers: { 'content-type': 'text/html' } }));
  }
  // Bypass
}
