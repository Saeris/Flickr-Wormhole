import Flickr from "@/flickr"

async function getList({ flickr = Flickr, groupId = ``, topicId = `` } = {}, { page = 1, perPage = 100 } = {}) {
  return await flickr.fetchResource(`flickr.groups.discuss.replies.getList`, { groupId, topicId }, { page, perPage })
}

export default getList
