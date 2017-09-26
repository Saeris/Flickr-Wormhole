import Flickr from "@/flickr"

export default async function browse({ apiKey = Flickr.apiKey } = {}, { catId = `` } = {}) {
  return await Flickr.fetchResource(`flickr.groups.browse`, { apiKey }, { catId }, `read`)
}
