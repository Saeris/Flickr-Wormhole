import Flickr from "@/flickr"

async function addComment({ flickr = Flickr, photoId = ``, commentText = `` } = {}) {
  return await flickr.fetchResource(`flickr.photos.comments.addComment`, { photoId, commentText }, {}, `write`)
}

export default addComment
