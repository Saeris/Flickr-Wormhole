import Flickr from "@/flickr"

export default function getTopics({ flickr = Flickr } = {}) {
  return flickr.fetchResource(`flickr.push.getTopics`)
}
