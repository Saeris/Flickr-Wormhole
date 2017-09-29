import Flickr from "@/flickr"

async function getFullToken({ apiKey = Flickr.apiKey, miniToken = `` } = {}) {
  return await Flickr.fetchResource(`flickr.auth.getFullToken`, { apiKey, miniToken })
}

export default getFullToken
