import Flickr from "@/flickr"

async function add({ apiKey = Flickr.apiKey, photoId = `` } = {}) {
  return await Flickr.fetchResource(`flickr.favorites.add`, { apiKey, photoId }, {}, `write`)
}

export default add
