import Flickr from "@/flickr"

async function join({ apiKey = Flickr.apiKey, groupId = `` } = {}, { acceptRules = `` } = {}) {
  return await Flickr.fetchResource(`flickr.groups.join`, { apiKey, groupId }, { acceptRules }, `write`)
}

export default join
