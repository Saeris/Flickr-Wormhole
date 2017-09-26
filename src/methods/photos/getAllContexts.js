import Flickr from "@/flickr"

export default async function getAllContexts({ apiKey = Flickr.apiKey, photoId = `` } = {}) {
  return await Flickr.fetchResource(`flickr.photos.getAllContexts`, { apiKey, photoId })
}
