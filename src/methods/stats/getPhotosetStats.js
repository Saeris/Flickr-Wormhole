import Flickr from "@/flickr"

async function getPhotosetStats({ apiKey = Flickr.apiKey, date = ``, photosetId = `` } = {}) {
  return await Flickr.fetchResource(`flickr.stats.getPhotosetStats`, { apiKey, date, photosetId }, {}, `read`)
}

export default getPhotosetStats
