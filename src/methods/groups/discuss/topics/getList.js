import Flickr from "@/flickr"

async function getList({ apiKey = Flickr.apiKey, groupId = `` } = {}, { page = 1, perPage = 100 } = {}) {
  return await Flickr.fetchResource(`flickr.groups.discuss.topics.getList`, { apiKey, groupId }, { page, perPage })
}

export default getList
