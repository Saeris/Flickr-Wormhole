import Flickr from "@/flickr"

export default async function add({ apiKey = Flickr.apiKey, groupId = ``, topicId = ``, message = `` } = {}) {
  return await Flickr.fetchResource(
    `flickr.groups.discuss.replies.add`,
    { apiKey, groupId, topicId, message },
    {},
    `write`
  )
}
