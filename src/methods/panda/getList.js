import Flickr from "@/flickr"

async function getList({ apiKey = Flickr.apiKey } = {}) {
  return await Flickr.fetchResource(`flickr.panda.getList`, { apiKey })
}

export default getList
