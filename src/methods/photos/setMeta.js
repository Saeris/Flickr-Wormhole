import Flickr from "@/flickr"

async function setMeta({ apiKey = Flickr.apiKey, photoId = `` } = {}, { title = ``, description = `` } = {}) {
  return await Flickr.fetchResource(`flickr.photos.setMeta`, { apiKey, photoId }, { title, description }, `write`)
}

export default setMeta
