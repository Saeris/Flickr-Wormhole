import Flickr from "@/flickr"

export default async function lookupGroup({ apiKey = Flickr.apiKey, url = `` } = {}) {
  return await Flickr.fetchResource(`flickr.urls.lookupGroup`, { apiKey, url })
}
