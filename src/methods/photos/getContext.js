import Flickr from "@/flickr"

async function getContext({ flickr = Flickr, photoId = `` } = {}) {
  return await flickr.fetchResource(`flickr.photos.getContext`, { photoId })
}

export default getContext
