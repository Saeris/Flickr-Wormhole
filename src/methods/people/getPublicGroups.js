import Flickr from "@/flickr"

async function getPublicGroups({ apiKey = Flickr.apiKey, userId = `` } = [], { invitationOnly = false } = []) {
  return await Flickr.fetchResource(`flickr.people.getPublicGroups`, { apiKey, userId }, { invitationOnly })
}

export default getPublicGroups
