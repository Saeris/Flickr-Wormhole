import Flickr from "@/flickr"

export default function getPlaceTypes({ flickr = Flickr } = {}) {
  return flickr.fetchResource(`flickr.places.getPlaceTypes`)
}
