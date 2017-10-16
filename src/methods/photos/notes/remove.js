import Flickr from "@/flickr"

export default function remove({ flickr = Flickr, noteId = `` } = {}) {
  return flickr.fetchResource(`flickr.photos.notes.delete`, { noteId }, {}, `write`)
}
