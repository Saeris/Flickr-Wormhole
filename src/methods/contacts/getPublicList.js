import Flickr from "@/flickr"

export default function getPublicList({ flickr = Flickr, userId = `` } = {}, { page = 1, perPage = 1000 } = {}) {
  return flickr.fetchResource(`flickr.contacts.getPublicList`, { userId }, { page, perPage })
}
