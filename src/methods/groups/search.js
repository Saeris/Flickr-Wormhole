import Flickr from "@/flickr"

export default async function search({ apiKey = Flickr.apiKey, text = `` } = {}, { page = 1, perPage = 100 } = {}) {
  return await Flickr.fetchResource(`flickr.groups.search`, { apiKey, text }, { page, perPage })
}
