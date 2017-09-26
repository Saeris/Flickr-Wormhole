import Flickr from "@/flickr"

export default async function getInfo(
  { apiKey = Flickr.apiKey, groupId = `` } = {},
  { groupPathAlias = ``, lang = `` } = {}
) {
  return await Flickr.fetchResource(`flickr.groups.getInfo`, { apiKey, groupId }, { groupPathAlias, lang })
}
