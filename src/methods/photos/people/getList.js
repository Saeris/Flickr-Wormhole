import Flickr from "@/flickr"

async function getList({ apiKey = Flickr.apiKey, photoId = `` } = {}) {
  return await Flickr.fetchResource(`flickr.photos.people.getList`, { apiKey, photoId })
}

export default getList
