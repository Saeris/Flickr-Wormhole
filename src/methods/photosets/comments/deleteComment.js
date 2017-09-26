import Flickr from "@/flickr"

export default async function deleteComment({ apiKey = Flickr.apiKey, commentId = `` } = {}) {
  return await Flickr.fetchResource(`flickr.photosets.comments.deleteComment`, { apiKey, commentId }, {}, `write`)
}
