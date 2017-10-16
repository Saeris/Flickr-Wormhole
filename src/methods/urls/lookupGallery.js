import Flickr from "@/flickr"

export default function lookupGallery({ flickr = Flickr, url = `` } = {}) {
  return flickr.fetchResource(`flickr.urls.lookupGallery`, { url })
}
