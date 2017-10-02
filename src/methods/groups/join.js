import Flickr from "@/flickr"

async function join({ flickr = Flickr, groupId = `` } = {}, { acceptRules = `` } = {}) {
  return await flickr.fetchResource(`flickr.groups.join`, { groupId }, { acceptRules }, `write`)
}

export default join
