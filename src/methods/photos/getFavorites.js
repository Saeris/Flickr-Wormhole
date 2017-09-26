import Flickr from "@/flickr"

export default async function getFavorites(
  { apiKey = Flickr.apiKey, photoId = `` } = {},
  { page = 1, perPage = 10 } = {}
) {
  return await Flickr.fetchResource(`flickr.photos.getFavorites`, { apiKey, photoId }, { page, perPage })
}
