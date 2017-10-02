import Flickr from "@/flickr"

async function getSizes({ flickr = Flickr, photoId = `` } = {}) {
  return await flickr.fetchResource(`flickr.photos.getSizes`, { photoId })
}

export default getSizes
