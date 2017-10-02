import Flickr from "@/flickr"

async function add(
  { flickr = Flickr, photoId = ``, noteX = ``, noteY = ``, noteW = ``, noteH = ``, noteText = `` } = {}
) {
  return await flickr.fetchResource(
    `flickr.photos.notes.add`,
    { photoId, noteX, noteY, noteW, noteH, noteText },
    {},
    `write`
  )
}

export default add
