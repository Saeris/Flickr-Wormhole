import Flickr from "@/flickr"

export default async function getContentType({ apiKey = Flickr.apiKey } = {}) {
  return await Flickr.fetchResource(`flickr.prefs.getContentType`, { apiKey }, {}, `read`)
}
