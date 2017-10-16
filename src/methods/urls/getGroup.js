import Flickr from "@/flickr"

export default function getGroup({ flickr = Flickr, groupId = `` } = {}) {
  return flickr.fetchResource(`flickr.urls.getGroup`, { groupId })
}
