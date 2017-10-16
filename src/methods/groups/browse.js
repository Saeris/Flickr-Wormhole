import Flickr from "@/flickr"

export default function browse({ flickr = Flickr } = {}, { catId = `` } = {}) {
  return flickr.fetchResource(`flickr.groups.browse`, {}, { catId }, `read`)
}
