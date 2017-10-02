import Flickr from "@/flickr"

async function getInfo({ flickr = Flickr, groupId = `` } = {}, { groupPathAlias = ``, lang = `` } = {}) {
  return await flickr.fetchResource(`flickr.groups.getInfo`, { groupId }, { groupPathAlias, lang })
}

export default getInfo
