import Flickr from "@/flickr"

export default async function getList({ apiKey = Flickr.apiKey, photosetId = `` } = {}) {
  return await Flickr.fetchResource(`flickr.photosets.comments.getList`, { apiKey, photosetId })
}
