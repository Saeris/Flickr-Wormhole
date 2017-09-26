import Flickr from "@/flickr"

export default async function getListUserPopular({ apiKey = Flickr.apiKey } = {}, { userId = ``, count = 10 } = {}) {
  return await Flickr.fetchResource(`flickr.tags.getListUserPopular`, { apiKey }, { userId, count })
}
