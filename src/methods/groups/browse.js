import Flickr from "@/flickr"

async function browse({ apiKey = Flickr.apiKey } = {}, { catId = `` } = {}) {
  return await Flickr.fetchResource(`flickr.groups.browse`, { apiKey }, { catId }, `read`)
}

export default browse
