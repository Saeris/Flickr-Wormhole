import Flickr from "@/flickr"

async function getPhotostreamDomains({ flickr = Flickr, date = `` } = {}, { page = 1, perPage = 25 } = {}) {
  return await flickr.fetchResource(`flickr.stats.getPhotostreamDomains`, { date }, { page, perPage }, `read`)
}

export default getPhotostreamDomains
