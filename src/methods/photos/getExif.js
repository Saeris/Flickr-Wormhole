import Flickr from "@/flickr"

async function getExif({ apiKey = Flickr.apiKey, photoId = `` } = {}, { secret = `` } = {}) {
  return await Flickr.fetchResource(`flickr.photos.getExif`, { apiKey, photoId }, { secret })
}

export default getExif
