import Flickr from "@/flickr"

export default async function getInfo({ apiKey = Flickr.apiKey, photoId = `` } = {}, { secret = `` } = {}) {
  return await Flickr.fetchResource(`flickr.photos.getInfo`, { apiKey, photoId }, { secret })
}
