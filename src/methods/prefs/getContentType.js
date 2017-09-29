import Flickr from "@/flickr"

async function getContentType({ apiKey = Flickr.apiKey } = {}) {
  return await Flickr.fetchResource(`flickr.prefs.getContentType`, { apiKey }, {}, `read`)
}

export default getContentType
