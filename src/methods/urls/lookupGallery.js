import Flickr from "@/flickr"

export default async function lookupGallery({ apiKey = Flickr.apiKey, url = `` } = {}) {
  return await Flickr.fetchResource(`flickr.urls.lookupGallery`, { apiKey, url })
}
