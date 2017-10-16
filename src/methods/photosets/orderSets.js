import Flickr from "@/flickr"

export default function orderSets({ flickr = Flickr, photosetIds = `` } = {}) {
  return flickr.fetchResource(`flickr.photosets.orderSets`, { photosetIds }, {}, `write`)
}
