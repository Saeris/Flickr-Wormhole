import Flickr from "@/flickr"

export default async function editComment({ apiKey = Flickr.apiKey, commentId = ``, commentText = `` } = {}) {
  return await Flickr.fetchResource(
    `flickr.photosets.comments.editComment`,
    { apiKey, commentId, commentText },
    {},
    `write`
  )
}
