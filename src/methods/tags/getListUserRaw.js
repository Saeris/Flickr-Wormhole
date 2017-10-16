import Flickr from "@/flickr"

export default function getListUserRaw({ flickr = Flickr } = {}, { tag = `` } = {}) {
  return flickr.fetchResource(`flickr.tags.getListUserRaw`, {}, { tag })
}
