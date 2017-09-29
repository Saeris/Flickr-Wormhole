import Flickr from "@/flickr"

async function getSizes({ apiKey = Flickr.apiKey, photoId = `` } = {}) {
  return await Flickr.fetchResource(`flickr.photos.getSizes`, { apiKey, photoId })
}

export default getSizes
