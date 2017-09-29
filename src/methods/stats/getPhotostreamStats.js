import Flickr from "@/flickr"

async function getPhotostreamStats({ apiKey = Flickr.apiKey, date = `` } = {}) {
  return await Flickr.fetchResource(`flickr.stats.getPhotostreamStats`, { apiKey, date }, {}, `read`)
}

export default getPhotostreamStats
