import Flickr from "@/flickr"

async function getRelated({ apiKey = Flickr.apiKey, tag = `` } = {}) {
  return await Flickr.fetchResource(`flickr.tags.getRelated`, { apiKey, tag })
}

export default getRelated
