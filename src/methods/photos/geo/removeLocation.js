import Flickr from "@/flickr"

async function removeLocation({ flickr = Flickr, photoId = `` } = {}) {
  return await flickr.fetchResource(`flickr.photos.geo.removeLocation`, { photoId }, {}, `write`)
}

export default removeLocation
