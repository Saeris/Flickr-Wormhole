import Flickr from "@/flickr"

export default function getClusterPhotos({ flickr = Flickr, tag = ``, clusterId = `` } = {}) {
  return flickr.fetchResource(`flickr.tags.getClusterPhotos`, { tag, clusterId })
}
