import Flickr from "@/flickr"

async function lookupGallery({ flickr = Flickr, url = `` } = {}) {
  return await flickr.fetchResource(`flickr.urls.lookupGallery`, { url })
}

export default lookupGallery
