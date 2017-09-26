import Flickr from "@/flickr"

export default async function getContext({ apiKey = Flickr.apiKey, photoId = `` } = {}) {
  return await Flickr.fetchResource(`flickr.photos.getContext`, { apiKey, photoId })
}
