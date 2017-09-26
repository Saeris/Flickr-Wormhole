import Flickr from "@/flickr"

export default async function remove({ apiKey = Flickr.apiKey, groupId = ``, topicId = ``, replyId = `` } = {}) {
  return await Flickr.fetchResource(
    `flickr.groups.discuss.replies.delete`,
    { apiKey, groupId, topicId, replyId },
    {},
    `delete`
  )
}
