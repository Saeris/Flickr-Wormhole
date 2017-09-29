import Flickr from "@/flickr"

async function checkToken({ apiKey = Flickr.apiKey, oauthToken = `` } = {}) {
  return await Flickr.fetchResource(`flickr.auth.oauth.checkToken`, { apiKey, oauthToken })
}

export default checkToken
