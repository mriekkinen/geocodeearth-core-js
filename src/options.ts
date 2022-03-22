export interface Options {
  url: string
  client?: string
}

export const defaultOptions: Options = {
  url: 'https://api.geocode.earth/v1'
}
