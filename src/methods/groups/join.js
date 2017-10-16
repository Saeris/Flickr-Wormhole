import Flickr from "@/flickr"

export default function join({ flickr = Flickr, groupId = `` } = {}, { acceptRules = `` } = {}) {
  return flickr.fetchResource(`flickr.groups.join`, { groupId }, { acceptRules }, `write`)
}
