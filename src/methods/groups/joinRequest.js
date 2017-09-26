import Flickr from "@/flickr"

export default async function joinRequest(
  { apiKey = Flickr.apiKey, groupId = ``, message = `` } = {},
  { acceptRules = `` } = {}
) {
  return await Flickr.fetchResource(`flickr.groups.joinRequest`, { apiKey, groupId, message }, { acceptRules }, `write`)
}
