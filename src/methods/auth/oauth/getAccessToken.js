import Flickr from "@/flickr"

export default async function getAccessToken({ apiKey = Flickr.apiKey } = {}) {
  return await Flickr.fetchResource(`flickr.auth.oauth.getAccessToken`, { apiKey })
}
