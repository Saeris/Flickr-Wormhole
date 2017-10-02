import Flickr from "@/flickr"

async function getContext({ flickr = Flickr, photosetId = ``, photoId = `` } = {}) {
  return await flickr.fetchResource(`flickr.photosets.getContext`, { photosetId, photoId })
}

export default getContext
