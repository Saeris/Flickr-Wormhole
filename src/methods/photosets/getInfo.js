import Flickr from "@/flickr"

export default async function getInfo({ apiKey = Flickr.apiKey, photosetId = ``, userId = `` } = {}) {
  return await Flickr.fetchResource(`flickr.photosets.getInfo`, { apiKey, photosetId, userId })
}
