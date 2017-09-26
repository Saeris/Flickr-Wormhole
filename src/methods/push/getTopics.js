import Flickr from "@/flickr"

export default async function getTopics({ apiKey = Flickr.apiKey } = {}) {
  return await Flickr.fetchResource(`flickr.push.getTopics`, { apiKey })
}
