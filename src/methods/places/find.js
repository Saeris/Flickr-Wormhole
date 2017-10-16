import Flickr from "@/flickr"

export default function find({ flickr = Flickr, query = `` } = {}) {
  return flickr.fetchResource(`flickr.places.find`, { query })
}
