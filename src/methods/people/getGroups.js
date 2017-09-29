import Flickr from "@/flickr"

async function getGroups({ apiKey = Flickr.apiKey, userId = `` } = {}, { extras = `` } = {}) {
  return await Flickr.fetchResource(`flickr.people.getGroups`, { apiKey, userId }, { extras }, `read`)
}

export default getGroups
