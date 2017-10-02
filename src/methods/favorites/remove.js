import Flickr from "@/flickr"

async function remove({ flickr = Flickr, photoId = `` } = {}) {
  return await flickr.fetchResource(`flickr.favorites.remove`, { photoId }, {}, `write`)
}

export default remove
