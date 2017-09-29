import Flickr from "@/flickr"

async function edit({ apiKey = Flickr.apiKey, groupId = ``, topicId = ``, replyId = ``, message = `` } = {}) {
  return await Flickr.fetchResource(
    `flickr.groups.discuss.replies.edit`,
    { apiKey, groupId, topicId, replyId, message },
    {},
    `write`
  )
}

export default edit
