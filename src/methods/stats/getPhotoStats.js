import Flickr from "@/flickr"

export default function getPhotoStats({ flickr = Flickr, date = ``, photoId = `` } = {}) {
  return flickr.fetchResource(`flickr.stats.getPhotoStats`, { date, photoId }, {}, `read`)
}
