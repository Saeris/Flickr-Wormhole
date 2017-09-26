import Flickr from "@/flickr"

export default async function getHidden({ apiKey = Flickr.apiKey } = {}) {
  return await Flickr.fetchResource(`flickr.prefs.getHidden`, { apiKey }, {}, `read`)
}
