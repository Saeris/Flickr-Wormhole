import Flickr from "@/flickr"

export default function resolvePlaceUrl({ flickr = Flickr, url = `` } = {}) {
  return flickr.fetchResource(`flickr.places.resolvePlaceURL`, { url })
}
