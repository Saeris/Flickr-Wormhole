import Flickr from "@/flickr"

async function getList({ flickr = Flickr, photosetId = `` } = {}) {
  return await flickr.fetchResource(`flickr.photosets.comments.getList`, { photosetId })
}

export default getList
