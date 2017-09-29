import Flickr from "@/flickr"

async function getListPhoto({ apiKey = Flickr.apiKey, photoId = `` } = {}) {
  return await Flickr.fetchResource(`flickr.tags.getListPhoto`, { apiKey, photoId })
}

export default getListPhoto
