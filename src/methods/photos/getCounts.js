import Flickr from "@/flickr"

export default function getCounts({ flickr = Flickr } = {}, { dates = ``, takenDates = `` } = {}) {
  return flickr.fetchResource(`flickr.photos.getCounts`, {}, { dates, takenDates }, `read`)
}
