import Flickr from "@/flickr"

export default function addComment({ flickr = Flickr, photosetId = ``, commentText = `` } = {}) {
  return flickr.fetchResource(`flickr.photosets.comments.addComment`, { photosetId, commentText }, {}, `write`)
}
