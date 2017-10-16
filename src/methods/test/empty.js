import Flickr from "@/flickr"

export default function empty({ flickr = Flickr } = {}) {
  return flickr.fetchResource(`flickr.test.null`, {}, {}, `read`)
}
