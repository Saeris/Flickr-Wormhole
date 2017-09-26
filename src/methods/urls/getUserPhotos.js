import Flickr from "@/flickr"

export default async function getUserPhotos({ apiKey = Flickr.apiKey, userId = `` } = {}) {
  return await Flickr.fetchResource(`flickr.urls.getUserPhotos`, { apiKey, userId })
}
