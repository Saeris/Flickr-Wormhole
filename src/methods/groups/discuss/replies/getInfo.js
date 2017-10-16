import Flickr from "@/flickr"

export default function getInfo({ flickr = Flickr, groupId = ``, topicId = ``, replyId = `` } = {}) {
  return flickr.fetchResource(`flickr.groups.discuss.replies.getInfo`, { groupId, topicId, replyId })
}
