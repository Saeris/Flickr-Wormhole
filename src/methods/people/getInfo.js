import Flickr from "@/flickr"

export default async function getInfo({ apiKey = Flickr.apiKey, userId = `` } = {}) {
  return await Flickr.fetchResource(`flickr.people.getInfo`, { apiKey, userId })
}
