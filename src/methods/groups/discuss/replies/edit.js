import Flickr from "@/flickr"

export default async function edit(
  { apiKey = Flickr.apiKey, groupId = ``, topicId = ``, replyId = ``, message = `` } = {}
) {
  return await Flickr.fetchResource(
    `flickr.groups.discuss.replies.edit`,
    { apiKey, groupId, topicId, replyId, message },
    {},
    `write`
  )
}
