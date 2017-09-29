import Flickr from "@/flickr"

async function edit(
  { apiKey = Flickr.apiKey, noteId = ``, noteX = ``, noteY = ``, noteW = ``, noteH = ``, noteText = `` } = {}
) {
  return await Flickr.fetchResource(
    `flickr.photos.notes.edit`,
    { apiKey, noteId, noteX, noteY, noteW, noteH, noteText },
    {},
    `write`
  )
}

export default edit
