import Flickr from "@/flickr"

async function getPhotostreamStats({ flickr = Flickr, date = `` } = {}) {
  return await flickr.fetchResource(`flickr.stats.getPhotostreamStats`, { date }, {}, `read`)
}

export default getPhotostreamStats
