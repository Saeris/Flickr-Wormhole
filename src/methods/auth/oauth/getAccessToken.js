import Flickr from "@/flickr"

async function getAccessToken({ apiKey = Flickr.apiKey } = {}) {
  return await Flickr.fetchResource(`flickr.auth.oauth.getAccessToken`, { apiKey })
}

export default getAccessToken
