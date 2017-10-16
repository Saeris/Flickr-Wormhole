import Flickr from "@/flickr"

export default function editComment({ flickr = Flickr, commentId = ``, commentText = `` } = {}) {
  return flickr.fetchResource(`flickr.photos.comments.editComment`, { commentId, commentText }, {}, `write`)
}
