import Flickr from "@/flickr"

export default async function getInfo({ apiKey = Flickr.apiKey } = {}, { placeId = ``, woeId = `` } = {}) {
  return await Flickr.fetchResource(`flickr.places.getInfo`, { apiKey }, { placeId, woeId })
}
