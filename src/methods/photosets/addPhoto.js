import Flickr from "@/flickr"

export default async function addPhoto({ apiKey = Flickr.apiKey, photosetId = ``, photoId = `` } = {}) {
  return await Flickr.fetchResource(`flickr.photosets.addPhoto`, { apiKey, photosetId, photoId }, {}, `write`)
}
