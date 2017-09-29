import Flickr from "@/flickr"

async function remove({ apiKey = Flickr.apiKey, noteId = `` } = {}) {
  return await Flickr.fetchResource(`flickr.photos.notes.delete`, { apiKey, noteId }, {}, `write`)
}

export default remove
