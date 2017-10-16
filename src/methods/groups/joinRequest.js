import Flickr from "@/flickr"

export default function joinRequest({ flickr = Flickr, groupId = ``, message = `` } = {}, { acceptRules = `` } = {}) {
  return flickr.fetchResource(`flickr.groups.joinRequest`, { groupId, message }, { acceptRules }, `write`)
}
