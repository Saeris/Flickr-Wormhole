import Flickr from "@/flickr"

async function removePhotos({ apiKey = Flickr.apiKey, photosetId = ``, photoIds = `` } = {}) {
  return await Flickr.fetchResource(`flickr.photosets.removePhotos`, { apiKey, photosetId, photoIds }, {}, `write`)
}

export default removePhotos
