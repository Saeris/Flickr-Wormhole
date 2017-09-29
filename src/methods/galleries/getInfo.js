import Flickr from "@/flickr"

async function getInfo({ apiKey = Flickr.apiKey, galleryId = `` } = {}) {
  return await Flickr.fetchResource(`flickr.galleries.getInfo`, { apiKey, galleryId })
}

export default getInfo
