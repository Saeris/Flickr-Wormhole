import Flickr from "@/flickr"

async function getTopics({ apiKey = Flickr.apiKey } = {}) {
  return await Flickr.fetchResource(`flickr.push.getTopics`, { apiKey })
}

export default getTopics
