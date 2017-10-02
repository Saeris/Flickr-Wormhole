import Flickr from "@/flickr"

async function setMeta({ flickr = Flickr, photoId = `` } = {}, { title = ``, description = `` } = {}) {
  return await flickr.fetchResource(`flickr.photos.setMeta`, { photoId }, { title, description }, `write`)
}

export default setMeta
