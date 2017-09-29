import Flickr from "@/flickr"

async function removePhoto({ apiKey = Flickr.apiKey, photosetId = ``, photoId = `` } = {}) {
  return await Flickr.fetchResource(`flickr.photosets.removePhoto`, { apiKey, photosetId, photoId }, {}, `write`)
}

export default removePhoto
