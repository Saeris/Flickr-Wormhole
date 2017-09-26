import Flickr from "@/flickr"

export default async function getSubscriptions({ apiKey = Flickr.apiKey } = {}) {
  return await Flickr.fetchResource(`flickr.push.getSubscriptions`, { apiKey }, {}, `read`)
}
