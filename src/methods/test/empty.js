import Flickr from "@/flickr"

export default async function empty({ apiKey = Flickr.apiKey } = {}) {
  return await Flickr.fetchResource(`flickr.test.null`, { apiKey }, {}, `read`)
}
