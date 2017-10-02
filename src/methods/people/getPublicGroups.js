import Flickr from "@/flickr"

async function getPublicGroups({ flickr = Flickr, userId = `` } = [], { invitationOnly = false } = []) {
  return await flickr.fetchResource(`flickr.people.getPublicGroups`, { userId }, { invitationOnly })
}

export default getPublicGroups
