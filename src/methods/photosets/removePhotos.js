import Flickr from "@/flickr"

async function removePhotos({ flickr = Flickr, photosetId = ``, photoIds = `` } = {}) {
  return await flickr.fetchResource(`flickr.photosets.removePhotos`, { photosetId, photoIds }, {}, `write`)
}

export default removePhotos
