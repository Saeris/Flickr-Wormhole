import Flickr from "@/flickr"

async function getPhotoStats({ flickr = Flickr, date = ``, photoId = `` } = {}) {
  return await flickr.fetchResource(`flickr.stats.getPhotoStats`, { date, photoId }, {}, `read`)
}

export default getPhotoStats
