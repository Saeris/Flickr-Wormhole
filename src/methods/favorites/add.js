import Flickr from "@/flickr"

export default async function add({ apiKey = Flickr.apiKey, photoId = `` } = {}) {
  return await Flickr.fetchResource(`flickr.favorites.add`, { apiKey, photoId }, {}, `write`)
}
