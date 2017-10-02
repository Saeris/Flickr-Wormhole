import Flickr from "@/flickr"

async function editMeta({ flickr = Flickr, galleryId = ``, title = `` } = {}, { description = `` } = {}) {
  return await flickr.fetchResource(`flickr.galleries.editMeta`, { galleryId, title }, { description }, `write`)
}

export default editMeta
