import Flickr from "@/flickr"

async function deleteComment({ apiKey = Flickr.apiKey, commentId = `` } = {}) {
  return await Flickr.fetchResource(`flickr.photos.comments.deleteComment`, { apiKey, commentId }, {}, `write`)
}

export default deleteComment
