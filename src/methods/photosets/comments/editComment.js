import Flickr from "@/flickr"

export default async function editComment({ flickr = Flickr, commentId = ``, commentText = `` } = {}) {
  return await flickr.fetchResource(`flickr.photosets.comments.editComment`, { commentId, commentText }, {}, `write`)
}
