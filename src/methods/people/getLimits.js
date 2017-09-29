import Flickr from "@/flickr"

async function getLimits({ apiKey = Flickr.apiKey } = {}) {
  return await Flickr.fetchResource(`flickr.people.getLimits`, { apiKey }, {}, `read`)
}

export default getLimits
