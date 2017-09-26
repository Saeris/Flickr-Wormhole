import Flickr from "@/flickr"

export default async function getInfo({ apiKey = Flickr.apiKey, groupId = ``, topicId = `` } = {}) {
  return await Flickr.fetchResource(`flickr.groups.discuss.topics.getInfo`, { apiKey, groupId, topicId })
}
