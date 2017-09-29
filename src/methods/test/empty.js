import Flickr from "@/flickr"

async function empty({ apiKey = Flickr.apiKey } = {}) {
  return await Flickr.fetchResource(`flickr.test.null`, { apiKey }, {}, `read`)
}

export default empty
