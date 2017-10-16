import Flickr from "@/flickr"

export default function getList({ flickr = Flickr, groupId = `` } = {}, { page = 1, perPage = 100 } = {}) {
  return flickr.fetchResource(`flickr.groups.discuss.topics.getList`, { groupId }, { page, perPage })
}
