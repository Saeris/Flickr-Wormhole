import Flickr from "@/flickr"

async function unsubscribe(
  { flickr = Flickr, topic = ``, callback = ``, verify = `` } = {},
  { verifyToken = `` } = {}
) {
  return await flickr.fetchResource(`flickr.push.unsubscribe`, { topic, callback, verify }, { verifyToken }, `read`)
}

export default unsubscribe
