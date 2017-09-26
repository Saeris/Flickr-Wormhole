import Flickr from "@/flickr"

export default async function getInfo({ apiKey = Flickr.apiKey, groupId = ``, topicId = ``, replyId = `` } = {}) {
  return await Flickr.fetchResource(`flickr.groups.discuss.replies.getInfo`, { apiKey, groupId, topicId, replyId })
}
