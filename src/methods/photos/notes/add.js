import Flickr from "@/flickr"

export default function add(
  { flickr = Flickr, photoId = ``, noteX = ``, noteY = ``, noteW = ``, noteH = ``, noteText = `` } = {}
) {
  return flickr.fetchResource(`flickr.photos.notes.add`, { photoId, noteX, noteY, noteW, noteH, noteText }, {}, `write`)
}
