import Flickr from "@/flickr"

async function editMeta({ apiKey = Flickr.apiKey, galleryId = ``, title = `` } = {}, { description = `` } = {}) {
  return await Flickr.fetchResource(`flickr.galleries.editMeta`, { apiKey, galleryId, title }, { description }, `write`)
}

export default editMeta
