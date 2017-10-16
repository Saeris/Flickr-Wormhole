import Flickr from "@/flickr"

export default function remove({ flickr = Flickr, groupId = ``, topicId = ``, replyId = `` } = {}) {
  return flickr.fetchResource(`flickr.groups.discuss.replies.delete`, { groupId, topicId, replyId }, {}, `delete`)
}
