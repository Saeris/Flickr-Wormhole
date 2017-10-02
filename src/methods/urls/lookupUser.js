import Flickr from "@/flickr"

async function lookupUser({ flickr = Flickr, url = `` } = {}) {
  return await flickr.fetchResource(`flickr.urls.lookupUser`, { url })
}

export default lookupUser
