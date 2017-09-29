import Flickr from "@/flickr"

async function resolvePlaceUrl({ apiKey = Flickr.apiKey, url = `` } = {}) {
  return await Flickr.fetchResource(`flickr.places.resolvePlaceURL`, { apiKey, url })
}

export default resolvePlaceUrl
