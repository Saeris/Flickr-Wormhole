import Flickr from "@/flickr"

async function getContentType({ flickr = Flickr } = {}) {
  return await flickr.fetchResource(`flickr.prefs.getContentType`, {}, {}, `read`)
}

export default getContentType
