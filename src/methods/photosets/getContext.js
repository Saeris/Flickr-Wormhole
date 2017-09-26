import Flickr from "@/flickr"

export default async function getContext({ apiKey = Flickr.apiKey, photosetId = ``, photoId = `` } = {}) {
  return await Flickr.fetchResource(`flickr.photosets.getContext`, { apiKey, photosetId, photoId })
}
