import Flickr from "@/flickr"

async function getHidden({ apiKey = Flickr.apiKey } = {}) {
  return await Flickr.fetchResource(`flickr.prefs.getHidden`, { apiKey }, {}, `read`)
}

export default getHidden
