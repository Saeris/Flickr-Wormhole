import Flickr from "@/flickr"

export default function getServices({ flickr = Flickr } = {}) {
  return flickr.fetchResource(`flickr.blogs.getServices`)
}
