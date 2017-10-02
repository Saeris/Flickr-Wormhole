import Flickr from "@/flickr"

async function getList({ flickr = Flickr, photoId = `` } = {}, { minCommentDate = ``, maxCommentDate = `` } = {}) {
  return await flickr.fetchResource(`flickr.photos.comments.getList`, { photoId }, { minCommentDate, maxCommentDate })
}

export default getList
