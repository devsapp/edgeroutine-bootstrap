declare function addEventListener(type: 'fetch', handler: (event: FetchEvent) => void): void;
declare function skipWaiting(): void;

/****** Caching ******/

declare type EdgeRoutineCacheKey = string | Request;

declare const cache: EdgeRoutineCache;

declare type EdgeKvCons = {
  namespace: string
}
declare class EdgeKV {
  constructor(name: EdgeKvCons);
  get(key: string, type: { type: string }): string;
  delete(key: string): void;
}
declare interface EdgeRoutineCache {
  get(key: EdgeRoutineCacheKey): Promise<Response | undefined>;
  put(key: EdgeRoutineCacheKey, response: Response): Promise<void>;
  delete(key: EdgeRoutineCacheKey): Promise<void>;
}
