import got from 'got';

export class Http {
  async get<T>(
    url: string,
    options: {
      headers?: Record<string, string>;
      searchParams?: Record<string, string>;
    }
  ) {
    return await got.get(url, options).json<T>();
  }
}
