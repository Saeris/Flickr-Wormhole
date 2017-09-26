import Flickr from "@/flickr"

export default async function editComment({ apiKey = Flickr.apiKey, commentId = ``, commentText = `` } = {}) {
  return await Flickr.fetchResource(
    `flickr.photos.comments.editComment`,
    { apiKey, commentId, commentText },
    {},
    `write`
  )
}
