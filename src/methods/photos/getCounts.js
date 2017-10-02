import Flickr from "@/flickr"

async function getCounts({ flickr = Flickr } = {}, { dates = ``, takenDates = `` } = {}) {
  return await flickr.fetchResource(`flickr.photos.getCounts`, {}, { dates, takenDates }, `read`)
}

export default getCounts
