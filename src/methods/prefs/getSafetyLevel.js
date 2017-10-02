import Flickr from "@/flickr"

async function getSafetyLevel({ flickr = Flickr } = {}) {
  return await flickr.fetchResource(`flickr.prefs.getSafetyLevel`, {}, {}, `read`)
}

export default getSafetyLevel
