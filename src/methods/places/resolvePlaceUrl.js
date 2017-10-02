import Flickr from "@/flickr"

async function resolvePlaceUrl({ flickr = Flickr, url = `` } = {}) {
  return await flickr.fetchResource(`flickr.places.resolvePlaceURL`, { url })
}

export default resolvePlaceUrl
