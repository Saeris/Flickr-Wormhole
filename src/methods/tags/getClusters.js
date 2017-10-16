import Flickr from "@/flickr"

export default function getClusters({ flickr = Flickr, tag = `` } = {}) {
  return flickr.fetchResource(`flickr.tags.getClusters`, { tag })
}
