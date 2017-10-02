import Flickr from "@/flickr"

async function getGroup({ flickr = Flickr, groupId = `` } = {}) {
  return await flickr.fetchResource(`flickr.urls.getGroup`, { groupId })
}

export default getGroup
