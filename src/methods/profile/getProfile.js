import Flickr from "@/flickr"

export default async function getProfile({ apiKey = Flickr.apiKey, userId = `` } = {}) {
  return await Flickr.fetchResource(`flickr.profile.getProfile`, { apiKey, userId })
}
