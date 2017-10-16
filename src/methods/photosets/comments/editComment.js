import Flickr from "@/flickr"

export default function editComment({ flickr = Flickr, commentId = ``, commentText = `` } = {}) {
  return flickr.fetchResource(`flickr.photosets.comments.editComment`, { commentId, commentText }, {}, `write`)
}
