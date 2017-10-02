import Flickr from "@/flickr"

async function remove({ flickr = Flickr, groupId = ``, topicId = ``, replyId = `` } = {}) {
  return await flickr.fetchResource(`flickr.groups.discuss.replies.delete`, { groupId, topicId, replyId }, {}, `delete`)
}

export default remove
