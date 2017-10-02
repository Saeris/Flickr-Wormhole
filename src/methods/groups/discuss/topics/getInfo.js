import Flickr from "@/flickr"

async function getInfo({ flickr = Flickr, groupId = ``, topicId = `` } = {}) {
  return await flickr.fetchResource(`flickr.groups.discuss.topics.getInfo`, { groupId, topicId })
}

export default getInfo
