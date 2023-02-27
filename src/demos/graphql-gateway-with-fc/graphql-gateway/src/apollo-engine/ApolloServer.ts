
import { ApolloServer as OriginApolloServer } from '@apollo/server';
import { handleGraphQLRequest } from './handlers';

/**
 * Apollo GraphQL Server 在 EdgeRoutine 上的实现。
 */
export class ApolloServer extends OriginApolloServer {
  /**
   * 在指定的路径上，侦听 GraphQL Post 请求。
   * @param path 指定要侦听的路径。
   */

  async listen(path = '/graphql') {
    // 如果在未调用 `start()` 方法前，错误的先使用了 `listen()` 方法，则抛出异常。
    // this.assertStarted('listen');
    addEventListener('fetch', async (event: FetchEvent) => {
      const { request } = event;
      if (request.method === 'POST') {
        // 只处理 POST 请求
        const url = new URL(request.url);
        if (url.pathname === path) {
          // 当路径相符合时，将请求交给 `handleGraphQLRequest()` 处理
          event.respondWith(handleGraphQLRequest(this, request));
        }
      }
    });
  }
}
