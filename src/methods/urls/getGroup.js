import Flickr from "@/flickr"

async function getGroup({ apiKey = Flickr.apiKey, groupId = `` } = {}) {
  return await Flickr.fetchResource(`flickr.urls.getGroup`, { apiKey, groupId })
}

export default getGroup
