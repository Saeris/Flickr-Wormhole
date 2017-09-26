import Flickr from "@/flickr"

export default async function getContext({ apiKey = Flickr.apiKey, photoId = ``, userId = `` } = {}) {
  return await Flickr.fetchResource(`flickr.favorites.getContext`, { apiKey, photoId, userId })
}
