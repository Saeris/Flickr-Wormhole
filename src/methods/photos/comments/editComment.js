import Flickr from "@/flickr"

async function editComment({ flickr = Flickr, commentId = ``, commentText = `` } = {}) {
  return await flickr.fetchResource(`flickr.photos.comments.editComment`, { commentId, commentText }, {}, `write`)
}
export default editComment
