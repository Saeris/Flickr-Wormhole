import Flickr from "@/flickr"

export default function getProfile({ flickr = Flickr, userId = `` } = {}) {
  return flickr.fetchResource(`flickr.profile.getProfile`, { userId })
}
