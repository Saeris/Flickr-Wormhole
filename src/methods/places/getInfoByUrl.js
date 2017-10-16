import Flickr from "@/flickr"

export default function getInfoByUrl({ flickr = Flickr, url = `` } = {}) {
  return flickr.fetchResource(`flickr.places.getInfoByUrl`, { url })
}
