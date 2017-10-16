import Flickr from "@/flickr"

export default function getUserProfile({ flickr = Flickr, userId = `` } = {}) {
  return flickr.fetchResource(`flickr.urls.getUserProfile`, { userId })
}
