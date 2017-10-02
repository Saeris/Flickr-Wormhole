import Flickr from "@/flickr"

async function remove({ flickr = Flickr, noteId = `` } = {}) {
  return await flickr.fetchResource(`flickr.photos.notes.delete`, { noteId }, {}, `write`)
}

export default remove
