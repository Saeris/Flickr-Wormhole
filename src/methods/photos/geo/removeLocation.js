import Flickr from "@/flickr"

export default async function removeLocation({ apiKey = Flickr.apiKey, photoId = `` } = {}) {
  return await Flickr.fetchResource(`flickr.photos.geo.removeLocation`, { apiKey, photoId }, {}, `write`)
}
