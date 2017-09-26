import Flickr from "@/flickr"

export default async function getGroup({ apiKey = Flickr.apiKey, groupId = `` } = {}) {
  return await Flickr.fetchResource(`flickr.urls.getGroup`, { apiKey, groupId })
}
