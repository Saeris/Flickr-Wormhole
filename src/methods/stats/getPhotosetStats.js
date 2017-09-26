import Flickr from "@/flickr"

export default async function getPhotosetStats({ apiKey = Flickr.apiKey, date = ``, photosetId = `` } = {}) {
  return await Flickr.fetchResource(`flickr.stats.getPhotosetStats`, { apiKey, date, photosetId }, {}, `read`)
}
