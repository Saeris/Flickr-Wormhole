import Flickr from "@/flickr"

async function lookupUser({ apiKey = Flickr.apiKey, url = `` } = {}) {
  return await Flickr.fetchResource(`flickr.urls.lookupUser`, { apiKey, url })
}

export default lookupUser
