import Flickr from "@/flickr"

async function editMeta({ flickr = Flickr, photosetId = ``, title = `` } = {}, { description = `` } = {}) {
  return await flickr.fetchResource(`flickr.photosets.editMeta`, { photosetId, title }, { description }, `write`)
}

export default editMeta
