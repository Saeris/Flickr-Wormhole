import Flickr from "@/flickr"

async function getTopics({ flickr = Flickr } = {}) {
  return await flickr.fetchResource(`flickr.push.getTopics`)
}

export default getTopics
