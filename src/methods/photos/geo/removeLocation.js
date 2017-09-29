import Flickr from "@/flickr"

async function removeLocation({ apiKey = Flickr.apiKey, photoId = `` } = {}) {
  return await Flickr.fetchResource(`flickr.photos.geo.removeLocation`, { apiKey, photoId }, {}, `write`)
}

export default removeLocation
