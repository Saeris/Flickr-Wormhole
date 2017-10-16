import Flickr from "@/flickr"

export default function getInfo({ flickr = Flickr, userId = `` } = {}) {
  return flickr.fetchResource(`flickr.people.getInfo`, { userId })
}
