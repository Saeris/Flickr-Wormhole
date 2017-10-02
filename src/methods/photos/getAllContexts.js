import Flickr from "@/flickr"

async function getAllContexts({ flickr = Flickr, photoId = `` } = {}) {
  return await flickr.fetchResource(`flickr.photos.getAllContexts`, { photoId })
}

export default getAllContexts
