import Flickr from "@/flickr"

export default async function addComment({ flickr = Flickr, photosetId = ``, commentText = `` } = {}) {
  return await flickr.fetchResource(`flickr.photosets.comments.addComment`, { photosetId, commentText }, {}, `write`)
}
