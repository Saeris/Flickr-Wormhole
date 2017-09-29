import Flickr from "@/flickr"

async function getPhotoStats({ apiKey = Flickr.apiKey, date = ``, photoId = `` } = {}) {
  return await Flickr.fetchResource(`flickr.stats.getPhotoStats`, { apiKey, date, photoId }, {}, `read`)
}

export default getPhotoStats
