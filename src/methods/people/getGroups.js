import Flickr from "@/flickr"

export default async function getGroups({ apiKey = Flickr.apiKey, userId = `` } = {}, { extras = `` } = {}) {
  return await Flickr.fetchResource(`flickr.people.getGroups`, { apiKey, userId }, { extras }, `read`)
}
