import Flickr from "@/flickr"

async function getInfo({ flickr = Flickr, photoId = `` } = {}, { secret = `` } = {}) {
  return await flickr.fetchResource(`flickr.photos.getInfo`, { photoId }, { secret })
}

export default getInfo
