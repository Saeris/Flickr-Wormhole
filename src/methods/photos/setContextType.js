import Flickr from "@/flickr"

async function setContextType({ flickr = Flickr, photoId = ``, contentType = 0 } = {}) {
  return await flickr.fetchResource(`flickr.photos.setContentType`, { photoId, contentType }, {}, `write`)
}

export default setContextType
