import Flickr from "@/flickr"

async function getList({ apiKey = Flickr.apiKey } = {}, { service = `` } = {}) {
  return await Flickr.fetchResource(`flickr.blogs.getList`, { apiKey }, { service }, `read`)
}

export default getList
