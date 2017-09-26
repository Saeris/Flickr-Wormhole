import Flickr from "@/flickr"

export default async function getList({ apiKey = Flickr.apiKey } = {}, { service = `` } = {}) {
  return await Flickr.fetchResource(`flickr.blogs.getList`, { apiKey }, { service }, `read`)
}
