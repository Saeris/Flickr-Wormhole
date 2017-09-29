import Flickr from "@/flickr"

async function getMethods({ apiKey = Flickr.apiKey } = {}) {
  return await Flickr.fetchResource(`flickr.reflection.getMethods`, { apiKey })
}

export default getMethods
