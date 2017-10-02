import Flickr from "@/flickr"

async function add({ flickr = Flickr, groupId = ``, topicId = ``, message = `` } = {}) {
  return await flickr.fetchResource(`flickr.groups.discuss.replies.add`, { groupId, topicId, message }, {}, `write`)
}

export default add
