import Flickr from "@/flickr"

export default function edit(
  { flickr = Flickr, noteId = ``, noteX = ``, noteY = ``, noteW = ``, noteH = ``, noteText = `` } = {}
) {
  return flickr.fetchResource(`flickr.photos.notes.edit`, { noteId, noteX, noteY, noteW, noteH, noteText }, {}, `write`)
}
