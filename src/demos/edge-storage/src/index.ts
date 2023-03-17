



const StorageNameSpace = 'eventbridge-go';
const StorageKey = 'ebstorage';
function isStorageSupported() {
  return typeof EdgeKV !== 'undefined';
}
async function putCache(key: string, response: Response) {

  try {
    const value = await response.text();

    // @ts-ignore
    const options = {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        key,
        value
      })
    };
    // @ts-ignore
    const url = new URL('http://<your account id>.eventbridge.cn-hangzhou.aliyuncs.com/webhook/putEvents');
    url.searchParams.set('token', 'your token 从url 参数获取')
    const urlString = url.toString();
    await fetch(urlString, options);


  } catch (e: any) {
    return {
      err: e.message
    }
  }

}
export async function fetchFromCache(urlString: string) {
  try {
    if (isStorageSupported()) {
      const edgeKvInstance = new EdgeKV({ namespace: StorageNameSpace });
      const getType = { type: "text" };
      const content = await edgeKvInstance.get(StorageKey, getType);
      if (content) {
        return content;
      }
    }
    const response = await fetch(urlString);
    if (isStorageSupported()) {
      const clonedRespone = await response.clone();
      await putCache(StorageKey, clonedRespone);
    }
    return await response.text();
  } catch (e:any) { return e.message }
}

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
  if (path === '/storage') {

    return fetchFromCache('https://www.aliyun.com').then(content => {
      const res = new Response(`storagecontent ${content}!`, { status: 200 });
      res.headers.append('Set-Cookie', 'uid=112; Path=/; HttpOnly');
      return Promise.resolve(res);
    });

  }
  // Bypass
}
