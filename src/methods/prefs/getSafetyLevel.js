import Flickr from "@/flickr"

export default async function getSafetyLevel({ apiKey = Flickr.apiKey } = {}) {
  return await Flickr.fetchResource(`flickr.prefs.getSafetyLevel`, { apiKey }, {}, `read`)
}
