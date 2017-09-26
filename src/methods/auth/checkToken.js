import Flickr from "@/flickr"

export default async function checkToken({ apiKey = Flickr.apiKey, authToken = `` } = {}) {
  return await Flickr.fetchResource(`flickr.auth.checkToken`, { apiKey, authToken })
}
