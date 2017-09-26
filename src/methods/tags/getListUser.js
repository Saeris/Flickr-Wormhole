import Flickr from "@/flickr"

export default async function getListUser({ apiKey = Flickr.apiKey } = {}, { userId = `` } = {}) {
  return await Flickr.fetchResource(`flickr.tags.getListUser`, { apiKey }, { userId })
}
