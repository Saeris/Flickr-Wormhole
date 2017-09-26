import Flickr from "@/flickr"

export default async function remove({ apiKey = Flickr.apiKey, photoId = `` } = {}) {
  return await Flickr.fetchResource(`flickr.favorites.remove`, { apiKey, photoId }, {}, `write`)
}
