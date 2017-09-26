import Flickr from "@/flickr"

export default async function removePhoto({ apiKey = Flickr.apiKey, photosetId = ``, photoId = `` } = {}) {
  return await Flickr.fetchResource(`flickr.photosets.removePhoto`, { apiKey, photosetId, photoId }, {}, `write`)
}
