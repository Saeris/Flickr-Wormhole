import Flickr from "@/flickr"

async function remove({ apiKey = Flickr.apiKey, photoId = `` } = {}) {
  return await Flickr.fetchResource(`flickr.favorites.remove`, { apiKey, photoId }, {}, `write`)
}

export default remove
