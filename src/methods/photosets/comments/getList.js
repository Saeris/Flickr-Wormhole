import Flickr from "@/flickr"

async function getList({ apiKey = Flickr.apiKey, photosetId = `` } = {}) {
  return await Flickr.fetchResource(`flickr.photosets.comments.getList`, { apiKey, photosetId })
}

export default getList
