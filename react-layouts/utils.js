import url from 'url'

export function getAbsoluteURL (path) {
  return process.env.NODE_ENV === 'production'
    ? url.resolve('https://alessandro.arnodo.net/', path)
    : url.resolve('/', path)
}

export function trackPageView () {
  const date = new Date().toISOString()
  return {
    page: window.location.href,
    time: date,
    referrer: document.referrer,
    agent: window.navigator.userAgent
  }
}
