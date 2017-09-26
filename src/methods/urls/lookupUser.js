import Flickr from "@/flickr"

export default async function lookupUser({ apiKey = Flickr.apiKey, url = `` } = {}) {
  return await Flickr.fetchResource(`flickr.urls.lookupUser`, { apiKey, url })
}
