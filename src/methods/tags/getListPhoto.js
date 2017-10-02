import Flickr from "@/flickr"

async function getListPhoto({ flickr = Flickr, photoId = `` } = {}) {
  return await flickr.fetchResource(`flickr.tags.getListPhoto`, { photoId })
}

export default getListPhoto
