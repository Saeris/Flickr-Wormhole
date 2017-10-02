import Flickr from "@/flickr"

async function getGroups({ flickr = Flickr, userId = `` } = {}, { extras = `` } = {}) {
  return await flickr.fetchResource(`flickr.people.getGroups`, { userId }, { extras }, `read`)
}

export default getGroups
