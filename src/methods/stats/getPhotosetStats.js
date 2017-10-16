import Flickr from "@/flickr"

export default function getPhotosetStats({ flickr = Flickr, date = ``, photosetId = `` } = {}) {
  return flickr.fetchResource(`flickr.stats.getPhotosetStats`, { date, photosetId }, {}, `read`)
}
