import url from 'url'

export function getAbsoluteURL (path) {
  return process.env.NODE_ENV === 'production'
    ? url.resolve('https://alessandro.arnodo.net/', path)
    : url.resolve('/', path)
}
