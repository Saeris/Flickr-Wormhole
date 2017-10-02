import Flickr from "@/flickr"

async function getPhotoDomains({ flickr = Flickr, date = `` } = {}, { photoId = ``, page = 1, perPage = 25 } = {}) {
  return await flickr.fetchResource(`flickr.stats.getPhotoDomains`, { date }, { photoId, page, perPage }, `read`)
}

export default getPhotoDomains
