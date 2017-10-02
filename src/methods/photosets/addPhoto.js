import Flickr from "@/flickr"

async function addPhoto({ flickr = Flickr, photosetId = ``, photoId = `` } = {}) {
  return await flickr.fetchResource(`flickr.photosets.addPhoto`, { photosetId, photoId }, {}, `write`)
}

export default addPhoto
