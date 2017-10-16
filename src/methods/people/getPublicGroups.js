import Flickr from "@/flickr"

export default function getPublicGroups({ flickr = Flickr, userId = `` } = [], { invitationOnly = false } = []) {
  return flickr.fetchResource(`flickr.people.getPublicGroups`, { userId }, { invitationOnly })
}
