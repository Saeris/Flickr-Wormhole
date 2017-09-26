import Flickr from "@/flickr"

export default async function getLimits({ apiKey = Flickr.apiKey } = {}) {
  return await Flickr.fetchResource(`flickr.people.getLimits`, { apiKey }, {}, `read`)
}
