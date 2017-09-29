import Flickr from "@/flickr"

async function addComment({ apiKey = Flickr.apiKey, photoId = ``, commentText = `` } = {}) {
  return await Flickr.fetchResource(`flickr.photos.comments.addComment`, { apiKey, photoId, commentText }, {}, `write`)
}

export default addComment
