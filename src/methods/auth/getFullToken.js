import Flickr from "@/flickr"

async function getFullToken({ flickr = Flickr, miniToken = `` } = {}) {
  return await flickr.fetchResource(`flickr.auth.getFullToken`, { miniToken })
}

export default getFullToken
