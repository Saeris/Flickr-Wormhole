import Flickr from "@/flickr"

async function rotate({ apiKey = Flickr.apiKey, photoId = ``, degrees = 0 } = {}) {
  return await Flickr.fetchResource(`flickr.photos.transform.rotate`, { apiKey, photoId, degrees }, {}, `write`)
}

export default rotate
