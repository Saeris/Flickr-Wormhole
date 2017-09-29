import Flickr from "@/flickr"

async function getListUserRaw({ apiKey = Flickr.apiKey } = {}, { tag = `` } = {}) {
  return await Flickr.fetchResource(`flickr.tags.getListUserRaw`, { apiKey }, { tag })
}

export default getListUserRaw
