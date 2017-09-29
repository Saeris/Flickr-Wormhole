import Flickr from "@/flickr"

async function unsubscribe(
  { apiKey = Flickr.apiKey, topic = ``, callback = ``, verify = `` } = {},
  { verifyToken = `` } = {}
) {
  return await Flickr.fetchResource(
    `flickr.push.unsubscribe`,
    { apiKey, topic, callback, verify },
    { verifyToken },
    `read`
  )
}

export default unsubscribe
