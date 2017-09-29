import Flickr from "@/flickr"

async function getPrivacy({ apiKey = Flickr.apiKey } = {}) {
  return await Flickr.fetchResource(`flickr.prefs.getPrivacy`, { apiKey }, {}, `read`)
}

export default getPrivacy
