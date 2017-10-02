import Flickr from "@/flickr"

async function rotate({ flickr = Flickr, photoId = ``, degrees = 0 } = {}) {
  return await flickr.fetchResource(`flickr.photos.transform.rotate`, { photoId, degrees }, {}, `write`)
}

export default rotate
