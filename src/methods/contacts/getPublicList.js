import Flickr from "@/flickr"

async function getPublicList({ flickr = Flickr, userId = `` } = {}, { page = 1, perPage = 1000 } = {}) {
  return await flickr.fetchResource(`flickr.contacts.getPublicList`, { userId }, { page, perPage })
}

export default getPublicList
