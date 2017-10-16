import Flickr from "@/flickr"

export default function add({ flickr = Flickr, groupId = ``, topicId = ``, message = `` } = {}) {
  return flickr.fetchResource(`flickr.groups.discuss.replies.add`, { groupId, topicId, message }, {}, `write`)
}
