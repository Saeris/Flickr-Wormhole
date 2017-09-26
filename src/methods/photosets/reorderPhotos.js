import Flickr from "@/flickr"

export default async function reorderPhotos({ apiKey = Flickr.apiKey, photosetId = ``, photoIds = `` } = {}) {
  return await Flickr.fetchResource(`flickr.photosets.reorderPhotos`, { apiKey, photosetId, photoIds }, {}, `write`)
}
