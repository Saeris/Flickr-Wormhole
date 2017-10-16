import Flickr from "@/flickr"

export default function deleteComment({ flickr = Flickr, commentId = `` } = {}) {
  return flickr.fetchResource(`flickr.photos.comments.deleteComment`, { commentId }, {}, `write`)
}
