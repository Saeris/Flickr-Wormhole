import Flickr from "@/flickr"

async function reorderPhotos({ flickr = Flickr, photosetId = ``, photoIds = `` } = {}) {
  return await flickr.fetchResource(`flickr.photosets.reorderPhotos`, { photosetId, photoIds }, {}, `write`)
}

export default reorderPhotos
