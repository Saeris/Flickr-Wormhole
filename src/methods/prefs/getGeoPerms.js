import Flickr from "@/flickr"

async function getGeoPerms({ apiKey = Flickr.apiKey } = {}) {
  return await Flickr.fetchResource(`flickr.prefs.getGeoPerms`, { apiKey }, {}, `read`)
}

export default getGeoPerms
