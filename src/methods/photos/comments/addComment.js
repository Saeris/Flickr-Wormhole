import Flickr from "@/flickr"

export default function addComment({ flickr = Flickr, photoId = ``, commentText = `` } = {}) {
  return flickr.fetchResource(`flickr.photos.comments.addComment`, { photoId, commentText }, {}, `write`)
}
