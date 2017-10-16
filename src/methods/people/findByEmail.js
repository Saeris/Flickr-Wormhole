import Flickr from "@/flickr"

export default function findByEmail({ flickr = Flickr, findEmail = `` } = {}) {
  return flickr.fetchResource(`flickr.people.findByEmail`, { findEmail })
}
