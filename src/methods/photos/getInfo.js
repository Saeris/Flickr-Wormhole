import Flickr from "@/flickr"

async function getInfo({ apiKey = Flickr.apiKey, photoId = `` } = {}, { secret = `` } = {}) {
  return await Flickr.fetchResource(`flickr.photos.getInfo`, { apiKey, photoId }, { secret })
}

export default getInfo
