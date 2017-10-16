import Flickr from "@/flickr"

export default function edit({ flickr = Flickr, groupId = ``, topicId = ``, replyId = ``, message = `` } = {}) {
  return flickr.fetchResource(`flickr.groups.discuss.replies.edit`, { groupId, topicId, replyId, message }, {}, `write`)
}
