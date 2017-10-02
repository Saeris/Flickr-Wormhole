import Flickr from "@/flickr"

async function edit({ flickr = Flickr, groupId = ``, topicId = ``, replyId = ``, message = `` } = {}) {
  return await flickr.fetchResource(
    `flickr.groups.discuss.replies.edit`,
    { groupId, topicId, replyId, message },
    {},
    `write`
  )
}

export default edit
