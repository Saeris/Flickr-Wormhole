import Flickr from "@/flickr"

async function setPrimaryPhoto({ flickr = Flickr, photosetId = ``, photoId = `` } = {}) {
  return await flickr.fetchResource(`flickr.photosets.setPrimaryPhoto`, { photoset, photoId }, {}, `write`)
}

export default setPrimaryPhoto
