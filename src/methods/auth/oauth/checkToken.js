import Flickr from "@/flickr"

export default async function checkToken({ apiKey = Flickr.apiKey, oauthToken = `` } = {}) {
  return await Flickr.fetchResource(`flickr.auth.oauth.checkToken`, { apiKey, oauthToken })
}
