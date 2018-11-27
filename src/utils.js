export const getPageIdForViewsCount = pathname => {
  let pageId =
    encodeURIComponent(pathname.substr(1).replace(/\//g, '--')) || 'home'
  if (pageId.endsWith('--')) {
    pageId = pageId.substr(0, pageId.length - 2)
  }
  return pageId
}
