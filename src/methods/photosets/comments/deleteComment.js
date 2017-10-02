import Flickr from "@/flickr"

export default async function deleteComment({ flickr = Flickr, commentId = `` } = {}) {
  return await flickr.fetchResource(`flickr.photosets.comments.deleteComment`, { commentId }, {}, `write`)
}
