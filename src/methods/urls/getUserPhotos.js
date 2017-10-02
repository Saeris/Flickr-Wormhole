import Flickr from "@/flickr"

async function getUserPhotos({ flickr = Flickr, userId = `` } = {}) {
  return await flickr.fetchResource(`flickr.urls.getUserPhotos`, { userId })
}

export default getUserPhotos
