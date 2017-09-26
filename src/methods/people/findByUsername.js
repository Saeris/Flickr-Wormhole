import Flickr from "@/flickr"

export default async function findByUsername({ apiKey = Flickr.apiKey, username = `` } = {}) {
  return await Flickr.fetchResource(`flickr.people.findByUsername`, { apiKey, username })
}
