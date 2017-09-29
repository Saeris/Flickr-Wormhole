import Flickr from "@/flickr"

async function getSafetyLevel({ apiKey = Flickr.apiKey } = {}) {
  return await Flickr.fetchResource(`flickr.prefs.getSafetyLevel`, { apiKey }, {}, `read`)
}

export default getSafetyLevel
