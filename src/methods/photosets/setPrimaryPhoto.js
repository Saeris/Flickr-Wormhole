import Flickr from "@/flickr"

export default async function setPrimaryPhoto({ apiKey = Flickr.apiKey, photosetId = ``, photoId = `` } = {}) {
  return await Flickr.fetchResource(`flickr.photosets.setPrimaryPhoto`, { apiKey, photoset, photoId }, {}, `write`)
}
