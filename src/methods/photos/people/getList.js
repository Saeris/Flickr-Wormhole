import Flickr from "@/flickr"

async function getList({ flickr = Flickr, photoId = `` } = {}) {
  return await flickr.fetchResource(`flickr.photos.people.getList`, { photoId })
}

export default getList
