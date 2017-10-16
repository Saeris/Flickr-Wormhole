import Flickr from "@/flickr"

export default function findByUsername({ flickr = Flickr, username = `` } = {}) {
  return flickr.fetchResource(`flickr.people.findByUsername`, { username })
}
