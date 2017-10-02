import Flickr from "@/flickr"

async function getInfo({ flickr = Flickr, galleryId = `` } = {}) {
  return await flickr.fetchResource(`flickr.galleries.getInfo`, { galleryId })
}

export default getInfo
