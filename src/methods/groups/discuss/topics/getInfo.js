import Flickr from "@/flickr"

export default function getInfo({ flickr = Flickr, groupId = ``, topicId = `` } = {}) {
  return flickr.fetchResource(`flickr.groups.discuss.topics.getInfo`, { groupId, topicId })
}
