import Flickr from "@/flickr"

async function getCSVFiles({ apiKey = Flickr.apiKey } = {}) {
  return await Flickr.fetchResource(`flickr.stats.getCSVFiles`, { apiKey }, {}, `read`)
}

export default getCSVFiles
