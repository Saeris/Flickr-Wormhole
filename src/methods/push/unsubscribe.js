import Flickr from "@/flickr"

export default function unsubscribe(
  { flickr = Flickr, topic = ``, callback = ``, verify = `` } = {},
  { verifyToken = `` } = {}
) {
  return flickr.fetchResource(`flickr.push.unsubscribe`, { topic, callback, verify }, { verifyToken }, `read`)
}
