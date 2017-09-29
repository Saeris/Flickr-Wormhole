import Flickr from "@/flickr"

async function lookupGallery({ apiKey = Flickr.apiKey, url = `` } = {}) {
  return await Flickr.fetchResource(`flickr.urls.lookupGallery`, { apiKey, url })
}

export default lookupGallery
