import { ApolloServer } from '@apollo/server';
import { HeaderMap } from './HeaderMap';
import { parse as urlParse } from 'url';


export async function handleGraphQLRequest(
  server: ApolloServer,
  req: Request,
): Promise<Response> {
  server.assertStarted('expressMiddleware()');
  let res: Response = new Response(JSON.stringify({ errors: [] }), {
    headers: { 'content-type': 'application/json' },
  });;

  if (!req.body) {
    // The json body-parser *always* sets req.body to {} if it's unset (even
    // if the Content-Type doesn't match), so if it isn't set, you probably
    // forgot to set up body-parser. (Note that this may change in the future
    // body-parser@2.)
    res = new Response(JSON.stringify({ errors: [new Error('no body')] }), {
      headers: { 'content-type': 'application/json' },
    });

  }

  let graphqlRequest = await req.json();
  let gqlRes: any = {};
  try {
    gqlRes = await server.executeOperation(graphqlRequest);
    res = new Response(JSON.stringify({
      data: gqlRes.body.singleResult
        .data, errors: gqlRes.body.errors
    }), {
      headers: { 'content-type': 'application/json' },
    });
  } catch (e: any) {
    res = new Response(JSON.stringify({ errors: [e.message] }), {
      headers: { 'content-type': 'application/json' },
    });
  }

  return res;
}


