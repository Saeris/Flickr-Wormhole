import Flickr from "@/flickr"

export default async function add(
  { apiKey = Flickr.apiKey, photoId = ``, noteX = ``, noteY = ``, noteW = ``, noteH = ``, noteText = `` } = {}
) {
  return await Flickr.fetchResource(
    `flickr.photos.notes.add`,
    { apiKey, photoId, noteX, noteY, noteW, noteH, noteText },
    {},
    `write`
  )
}
