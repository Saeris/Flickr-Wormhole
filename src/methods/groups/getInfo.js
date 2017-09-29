import Flickr from "@/flickr"

async function getInfo({ apiKey = Flickr.apiKey, groupId = `` } = {}, { groupPathAlias = ``, lang = `` } = {}) {
  return await Flickr.fetchResource(`flickr.groups.getInfo`, { apiKey, groupId }, { groupPathAlias, lang })
}

export default getInfo
