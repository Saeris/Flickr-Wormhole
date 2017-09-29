import Flickr from "@/flickr"

async function getLocation({ apiKey = Flickr.apiKey, photoId = `` } = {}, { extras = `` } = {}) {
  return await Flickr.fetchResource(`flickr.photos.geo.getLocation`, { apiKey, photoId }, { extras })
}

export default getLocation
