import Flickr from "@/flickr"

async function lookupGroup({ apiKey = Flickr.apiKey, url = `` } = {}) {
  return await Flickr.fetchResource(`flickr.urls.lookupGroup`, { apiKey, url })
}

export default lookupGroup
