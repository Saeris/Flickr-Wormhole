import Flickr from "@/flickr"

async function getLocation({ flickr = Flickr, photoId = `` } = {}, { extras = `` } = {}) {
  return await flickr.fetchResource(`flickr.photos.geo.getLocation`, { photoId }, { extras })
}

export default getLocation
