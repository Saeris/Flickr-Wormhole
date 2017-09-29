import Flickr from "@/flickr"

async function checkToken({ apiKey = Flickr.apiKey, authToken = `` } = {}) {
  return await Flickr.fetchResource(`flickr.auth.checkToken`, { apiKey, authToken })
}

export default checkToken
