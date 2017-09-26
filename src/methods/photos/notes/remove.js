import Flickr from "@/flickr"

export default async function remove({ apiKey = Flickr.apiKey, noteId = `` } = {}) {
  return await Flickr.fetchResource(`flickr.photos.notes.delete`, { apiKey, noteId }, {}, `write`)
}
