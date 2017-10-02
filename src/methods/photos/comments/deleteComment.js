import Flickr from "@/flickr"

async function deleteComment({ flickr = Flickr, commentId = `` } = {}) {
  return await flickr.fetchResource(`flickr.photos.comments.deleteComment`, { commentId }, {}, `write`)
}

export default deleteComment
