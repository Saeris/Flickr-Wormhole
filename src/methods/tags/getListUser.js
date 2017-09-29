import Flickr from "@/flickr"

async function getListUser({ apiKey = Flickr.apiKey } = {}, { userId = `` } = {}) {
  return await Flickr.fetchResource(`flickr.tags.getListUser`, { apiKey }, { userId })
}

export default getListUser
