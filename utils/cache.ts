// utils/cache.ts
interface CacheItem {
  data: any;
  expiry: number;
}

const cache: { [key: string]: CacheItem } = {};

export const setCache = (key: string, data: any, expiryMs: number) => {
  const expiry = Date.now() + expiryMs;
  cache[key] = { data, expiry };
};

export const getCache = (key: string) => {
  const item = cache[key];
  if (item && Date.now() < item.expiry) {
    return item.data;
  }
  return null;
};
