import Flickr from "@/flickr"

async function create({ flickr = Flickr, title = ``, primaryPhotoId = `` } = {}, { description = `` } = {}) {
  return await flickr.fetchResource(`flickr.photosets.create`, { title, primaryPhotoId }, { description }, `write`)
}

export default create
