import Flickr from "@/flickr"

export default async function getRelated({ apiKey = Flickr.apiKey, tag = `` } = {}) {
  return await Flickr.fetchResource(`flickr.tags.getRelated`, { apiKey, tag })
}
