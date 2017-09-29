import Flickr from "@/flickr"

async function getHotList({ apiKey = Flickr.apiKey } = {}, { period = `day`, count = 20 } = {}) {
  return await Flickr.fetchResource(`flickr.tags.getHotList`, { apiKey }, { period, count })
}

export default getHotList
