import Flickr from "@/flickr"

async function lookupGroup({ flickr = Flickr, url = `` } = {}) {
  return await flickr.fetchResource(`flickr.urls.lookupGroup`, { url })
}

export default lookupGroup
