import Flickr from "@/flickr"

async function getPhotosetStats({ flickr = Flickr, date = ``, photosetId = `` } = {}) {
  return await flickr.fetchResource(`flickr.stats.getPhotosetStats`, { date, photosetId }, {}, `read`)
}

export default getPhotosetStats
