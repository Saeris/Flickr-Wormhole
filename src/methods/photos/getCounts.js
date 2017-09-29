import Flickr from "@/flickr"

async function getCounts({ apiKey = Flickr.apiKey } = {}, { dates = ``, takenDates = `` } = {}) {
  return await Flickr.fetchResource(`flickr.photos.getCounts`, { apiKey }, { dates, takenDates }, `read`)
}

export default getCounts
