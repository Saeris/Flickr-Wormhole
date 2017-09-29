import Flickr from "@/flickr"

async function getContext({ apiKey = Flickr.apiKey, photoId = `` } = {}) {
  return await Flickr.fetchResource(`flickr.photos.getContext`, { apiKey, photoId })
}

export default getContext
