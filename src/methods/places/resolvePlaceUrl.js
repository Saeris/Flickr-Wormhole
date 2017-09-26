import Flickr from "@/flickr"

export default async function resolvePlaceUrl({ apiKey = Flickr.apiKey, url = `` } = {}) {
  return await Flickr.fetchResource(`flickr.places.resolvePlaceURL`, { apiKey, url })
}
