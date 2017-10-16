import Flickr from "@/flickr"

export default function getInfo({ flickr = Flickr, groupId = `` } = {}, { groupPathAlias = ``, lang = `` } = {}) {
  return flickr.fetchResource(`flickr.groups.getInfo`, { groupId }, { groupPathAlias, lang })
}
