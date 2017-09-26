import Flickr from "@/flickr"

export default async function addComment({ apiKey = Flickr.apiKey, photosetId = ``, commentText = `` } = {}) {
  return await Flickr.fetchResource(
    `flickr.photosets.comments.addComment`,
    { apiKey, photosetId, commentText },
    {},
    `write`
  )
}
