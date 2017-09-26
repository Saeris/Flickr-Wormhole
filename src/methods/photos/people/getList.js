import Flickr from "@/flickr"

export default async function getList({ apiKey = Flickr.apiKey, photoId = `` } = {}) {
  return await Flickr.fetchResource(`flickr.photos.people.getList`, { apiKey, photoId })
}
