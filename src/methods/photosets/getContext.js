import Flickr from "@/flickr"

async function getContext({ apiKey = Flickr.apiKey, photosetId = ``, photoId = `` } = {}) {
  return await Flickr.fetchResource(`flickr.photosets.getContext`, { apiKey, photosetId, photoId })
}

export default getContext
