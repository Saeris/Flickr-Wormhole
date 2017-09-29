import Flickr from "@/flickr"

async function getPhotostreamDomains({ apiKey = Flickr.apiKey, date = `` } = {}, { page = 1, perPage = 25 } = {}) {
  return await Flickr.fetchResource(`flickr.stats.getPhotostreamDomains`, { apiKey, date }, { page, perPage }, `read`)
}

export default getPhotostreamDomains
