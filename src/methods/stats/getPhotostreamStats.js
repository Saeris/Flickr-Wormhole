import Flickr from "@/flickr"

export default async function getPhotostreamStats({ apiKey = Flickr.apiKey, date = `` } = {}) {
  return await Flickr.fetchResource(`flickr.stats.getPhotostreamStats`, { apiKey, date }, {}, `read`)
}
