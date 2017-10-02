import Flickr from "@/flickr"

async function removePhoto({ flickr = Flickr, photosetId = ``, photoId = `` } = {}) {
  return await flickr.fetchResource(`flickr.photosets.removePhoto`, { photosetId, photoId }, {}, `write`)
}

export default removePhoto
