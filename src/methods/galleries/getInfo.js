import Flickr from "@/flickr"

export default async function getInfo({ apiKey = Flickr.apiKey, galleryId = `` } = {}) {
  return await Flickr.fetchResource(`flickr.galleries.getInfo`, { apiKey, galleryId })
}
