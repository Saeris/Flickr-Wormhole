import Flickr from "@/flickr"

async function getContext({ flickr = Flickr, photoId = ``, userId = `` } = {}) {
  return await flickr.fetchResource(`flickr.favorites.getContext`, { photoId, userId })
}

export default getContext
