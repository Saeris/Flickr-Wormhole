import Flickr from "@/flickr"

async function getSubscriptions({ apiKey = Flickr.apiKey } = {}) {
  return await Flickr.fetchResource(`flickr.push.getSubscriptions`, { apiKey }, {}, `read`)
}

export default getSubscriptions
