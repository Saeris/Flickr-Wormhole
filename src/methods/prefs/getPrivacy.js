import Flickr from "@/flickr"

export default async function getPrivacy({ apiKey = Flickr.apiKey } = {}) {
  return await Flickr.fetchResource(`flickr.prefs.getPrivacy`, { apiKey }, {}, `read`)
}
