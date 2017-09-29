import Flickr from "@/flickr"

async function getInfo({ apiKey = Flickr.apiKey, groupId = ``, topicId = `` } = {}) {
  return await Flickr.fetchResource(`flickr.groups.discuss.topics.getInfo`, { apiKey, groupId, topicId })
}

export default getInfo
