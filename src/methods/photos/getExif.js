import Flickr from "@/flickr"

async function getExif({ flickr = Flickr, photoId = `` } = {}, { secret = `` } = {}) {
  return await flickr.fetchResource(`flickr.photos.getExif`, { photoId }, { secret })
}

export default getExif
