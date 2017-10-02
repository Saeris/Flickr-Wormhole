import Flickr from "@/flickr"

async function getGeoPerms({ flickr = Flickr } = {}) {
  return await flickr.fetchResource(`flickr.prefs.getGeoPerms`, {}, {}, `read`)
}

export default getGeoPerms
