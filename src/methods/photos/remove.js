import Flickr from "@/flickr"

async function remove({ apiKey = Flickr.apiKey, photoId = `` } = {}) {
  return await Flickr.fetchResource(`flickr.photos.delete`, { apiKey, photoId }, {}, `delete`)
}

export default remove
