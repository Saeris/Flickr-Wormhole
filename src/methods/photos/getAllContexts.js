import Flickr from "@/flickr"

async function getAllContexts({ apiKey = Flickr.apiKey, photoId = `` } = {}) {
  return await Flickr.fetchResource(`flickr.photos.getAllContexts`, { apiKey, photoId })
}

export default getAllContexts
