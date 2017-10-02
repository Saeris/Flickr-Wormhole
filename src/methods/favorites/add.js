import Flickr from "@/flickr"

async function add({ flickr = Flickr, photoId = `` } = {}) {
  return await flickr.fetchResource(`flickr.favorites.add`, { photoId }, {}, `write`)
}

export default add
