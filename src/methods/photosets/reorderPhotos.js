import Flickr from "@/flickr"

async function reorderPhotos({ apiKey = Flickr.apiKey, photosetId = ``, photoIds = `` } = {}) {
  return await Flickr.fetchResource(`flickr.photosets.reorderPhotos`, { apiKey, photosetId, photoIds }, {}, `write`)
}

export default reorderPhotos
