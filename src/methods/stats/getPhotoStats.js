import Flickr from "@/flickr"

export default async function getPhotoStats({ apiKey = Flickr.apiKey, date = ``, photoId = `` } = {}) {
  return await Flickr.fetchResource(`flickr.stats.getPhotoStats`, { apiKey, date, photoId }, {}, `read`)
}
