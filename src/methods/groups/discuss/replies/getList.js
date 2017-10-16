import Flickr from "@/flickr"

export default function getList(
  { flickr = Flickr, groupId = ``, topicId = `` } = {},
  { page = 1, perPage = 100 } = {}
) {
  return flickr.fetchResource(`flickr.groups.discuss.replies.getList`, { groupId, topicId }, { page, perPage })
}
