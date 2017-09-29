import Flickr from "@/flickr"

async function getList({ apiKey = Flickr.apiKey, groupId = ``, topicId = `` } = {}, { page = 1, perPage = 100 } = {}) {
  return await Flickr.fetchResource(
    `flickr.groups.discuss.replies.getList`,
    { apiKey, groupId, topicId },
    { page, perPage }
  )
}

export default getList
