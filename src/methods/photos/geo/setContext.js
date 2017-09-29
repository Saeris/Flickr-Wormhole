import Flickr from "@/flickr"

async function setContext({ apiKey = Flickr.apiKey, photoId = ``, context = `` } = {}) {
  return await Flickr.fetchResource(`flickr.photos.geo.setContext`, { apiKey, photoId, context }, {}, `write`)
}

export default setContext
