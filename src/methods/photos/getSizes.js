import Flickr from "@/flickr"

export default async function getSizes({ apiKey = Flickr.apiKey, photoId = `` } = {}) {
  return await Flickr.fetchResource(`flickr.photos.getSizes`, { apiKey, photoId })
}
