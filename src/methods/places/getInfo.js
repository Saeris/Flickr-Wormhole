import Flickr from "@/flickr"

export default function getInfo({ flickr = Flickr } = {}, { placeId = ``, woeId = `` } = {}) {
  return flickr.fetchResource(`flickr.places.getInfo`, {}, { placeId, woeId })
}
