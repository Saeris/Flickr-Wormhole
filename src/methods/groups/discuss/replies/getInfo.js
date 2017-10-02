import Flickr from "@/flickr"

async function getInfo({ flickr = Flickr, groupId = ``, topicId = ``, replyId = `` } = {}) {
  return await flickr.fetchResource(`flickr.groups.discuss.replies.getInfo`, { groupId, topicId, replyId })
}

export default getInfo
