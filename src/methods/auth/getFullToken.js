import Flickr from "@/flickr"

export default async function getFullToken({ apiKey = Flickr.apiKey, miniToken = `` } = {}) {
  return await Flickr.fetchResource(`flickr.auth.getFullToken`, { apiKey, miniToken })
}
