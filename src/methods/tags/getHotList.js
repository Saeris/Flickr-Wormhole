import Flickr from "@/flickr"

export default async function getHotList({ apiKey = Flickr.apiKey } = {}, { period = `day`, count = 20 } = {}) {
  return await Flickr.fetchResource(`flickr.tags.getHotList`, { apiKey }, { period, count })
}
