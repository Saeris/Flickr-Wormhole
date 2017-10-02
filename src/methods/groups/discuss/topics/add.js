import Flickr from "@/flickr"

async function add({ flickr = Flickr, groupId = ``, subject = ``, message = `` } = {}) {
  return await flickr.fetchResource(`flickr.groups.discuss.topics.add`, { groupId, subject, message }, {}, `write`)
}

export default add
