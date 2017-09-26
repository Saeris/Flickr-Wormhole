import Flickr from "@/flickr"

export default async function getListUserRaw({ apiKey = Flickr.apiKey } = {}, { tag = `` } = {}) {
  return await Flickr.fetchResource(`flickr.tags.getListUserRaw`, { apiKey }, { tag })
}
