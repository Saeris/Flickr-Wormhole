import Flickr from "@/flickr"

async function joinRequest({ flickr = Flickr, groupId = ``, message = `` } = {}, { acceptRules = `` } = {}) {
  return await flickr.fetchResource(`flickr.groups.joinRequest`, { groupId, message }, { acceptRules }, `write`)
}

export default joinRequest
