import Flickr from "@/flickr"

async function getList({ flickr = Flickr } = {}, { service = `` } = {}) {
  return await flickr.fetchResource(`flickr.blogs.getList`, {}, { service }, `read`)
}

export default getList
