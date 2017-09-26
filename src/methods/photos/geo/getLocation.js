import Flickr from "@/flickr"

export default async function getLocation({ apiKey = Flickr.apiKey, photoId = `` } = {}, { extras = `` } = {}) {
  return await Flickr.fetchResource(`flickr.photos.geo.getLocation`, { apiKey, photoId }, { extras })
}
