import Flickr from "@/flickr"

export default async function getListPhoto({ apiKey = Flickr.apiKey, photoId = `` } = {}) {
  return await Flickr.fetchResource(`flickr.tags.getListPhoto`, { apiKey, photoId })
}
