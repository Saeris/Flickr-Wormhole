import Flickr from "@/flickr"

async function edit(
  { flickr = Flickr, noteId = ``, noteX = ``, noteY = ``, noteW = ``, noteH = ``, noteText = `` } = {}
) {
  return await flickr.fetchResource(
    `flickr.photos.notes.edit`,
    { noteId, noteX, noteY, noteW, noteH, noteText },
    {},
    `write`
  )
}

export default edit
