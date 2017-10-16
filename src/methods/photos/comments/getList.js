import Flickr from "@/flickr"

export default function getList(
  { flickr = Flickr, photoId = `` } = {},
  { minCommentDate = ``, maxCommentDate = `` } = {}
) {
  return flickr.fetchResource(`flickr.photos.comments.getList`, { photoId }, { minCommentDate, maxCommentDate })
}
