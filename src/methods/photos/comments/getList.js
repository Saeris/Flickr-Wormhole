import Flickr from "@/flickr"

export default async function getList(
  { apiKey = Flickr.apiKey, photoId = `` } = {},
  { minCommentDate = ``, maxCommentDate = `` } = {}
) {
  return await Flickr.fetchResource(
    `flickr.photos.comments.getList`,
    { apiKey, photoId },
    { minCommentDate, maxCommentDate }
  )
}
