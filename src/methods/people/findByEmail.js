import Flickr from "@/flickr"

export default async function findByEmail({ apiKey = Flickr.apiKey, findEmail = `` } = {}) {
  return await Flickr.fetchResource(`flickr.people.findByEmail`, { apiKey, findEmail })
}
