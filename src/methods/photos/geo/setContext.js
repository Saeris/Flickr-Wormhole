import Flickr from "@/flickr"

async function setContext({ flickr = Flickr, photoId = ``, context = `` } = {}) {
  return await flickr.fetchResource(`flickr.photos.geo.setContext`, { photoId, context }, {}, `write`)
}

export default setContext
