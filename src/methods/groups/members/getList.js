import Flickr from "@/flickr"

export default function getList(
  { flickr = Flickr, groupId = `` } = {},
  { membertypes = 0, page = 1, perPage = 100 } = {}
) {
  return flickr.fetchResource(`flickr.groups.members.getList`, { groupId }, { membertypes, page, perPage }, `read`)
}
