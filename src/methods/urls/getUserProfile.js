import Flickr from "@/flickr"

export default async function getUserProfile({ apiKey = Flickr.apiKey, userId = `` } = {}) {
  return await Flickr.fetchResource(`flickr.urls.getUserProfile`, { apiKey, userId })
}
