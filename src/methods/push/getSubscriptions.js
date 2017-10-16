import Flickr from "@/flickr"

export default function getSubscriptions({ flickr = Flickr } = {}) {
  return flickr.fetchResource(`flickr.push.getSubscriptions`, {}, {}, `read`)
}
