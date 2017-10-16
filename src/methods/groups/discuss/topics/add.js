import Flickr from "@/flickr"

export default function add({ flickr = Flickr, groupId = ``, subject = ``, message = `` } = {}) {
  return flickr.fetchResource(`flickr.groups.discuss.topics.add`, { groupId, subject, message }, {}, `write`)
}
