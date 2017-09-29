import Flickr from "@/flickr"

async function getUserPhotos({ apiKey = Flickr.apiKey, userId = `` } = {}) {
  return await Flickr.fetchResource(`flickr.urls.getUserPhotos`, { apiKey, userId })
}

export default getUserPhotos
