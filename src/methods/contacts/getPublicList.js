import Flickr from "@/flickr"

async function getPublicList({ apiKey = Flickr.apiKey, userId = `` } = {}, { page = 1, perPage = 1000 } = {}) {
  return await Flickr.fetchResource(`flickr.contacts.getPublicList`, { apiKey, userId }, { page, perPage })
}

export default getPublicList
