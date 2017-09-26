import Flickr from "@/flickr"

export default async function setContextType({ apiKey = Flickr.apiKey, photoId = ``, contentType = 0 } = {}) {
  return await Flickr.fetchResource(`flickr.photos.setContentType`, { apiKey, photoId, contentType }, {}, `write`)
}
