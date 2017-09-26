import Flickr from "@/flickr"

export default async function getGroups({ apiKey = Flickr.apiKey } = {}, { page = 1, perPage = 400 } = {}) {
  return await Flickr.fetchResource(`flickr.groups.pools.getGroups`, { apiKey }, { page, perPage }, `read`)
}
