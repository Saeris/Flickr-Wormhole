import Flickr from "@/flickr"

export default function getGroups({ flickr = Flickr, userId = `` } = {}, { extras = `` } = {}) {
  return flickr.fetchResource(`flickr.people.getGroups`, { userId }, { extras }, `read`)
}
