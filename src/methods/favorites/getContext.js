import Flickr from "@/flickr"

async function getContext({ apiKey = Flickr.apiKey, photoId = ``, userId = `` } = {}) {
  return await Flickr.fetchResource(`flickr.favorites.getContext`, { apiKey, photoId, userId })
}

export default getContext
