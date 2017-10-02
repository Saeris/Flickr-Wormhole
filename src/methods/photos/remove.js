import Flickr from "@/flickr"

async function remove({ flickr = Flickr, photoId = `` } = {}) {
  return await flickr.fetchResource(`flickr.photos.delete`, { photoId }, {}, `delete`)
}

export default remove
