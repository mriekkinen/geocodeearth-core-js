import { Options, defaultOptions } from '../options'

type Endpoint = 'autocomplete'

export const createURL = (endpoint: Endpoint, query: Record<string, string>, options: Options = defaultOptions): URL => {
  const urlStr = options.url === undefined ? defaultOptions.url : options.url
  let url = new URL(`${urlStr}/${endpoint}`)

  if (options.client !== undefined) {
    query.client = options.client
  }

  url.search = new URLSearchParams(query).toString()
  return url
}
