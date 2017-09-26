import Flickr from "@/flickr"

export default async function getExif({ apiKey = Flickr.apiKey, photoId = `` } = {}, { secret = `` } = {}) {
  return await Flickr.fetchResource(`flickr.photos.getExif`, { apiKey, photoId }, { secret })
}
