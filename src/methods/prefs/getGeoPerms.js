import Flickr from "@/flickr"

export default async function getGeoPerms({ apiKey = Flickr.apiKey } = {}) {
  return await Flickr.fetchResource(`flickr.prefs.getGeoPerms`, { apiKey }, {}, `read`)
}
