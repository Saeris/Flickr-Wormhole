import Flickr from "@/flickr"

async function setTags({ apiKey = Flickr.apiKey, photoId = ``, tags = `` } = {}) {
  return await Flickr.fetchResource(`flickr.photos.setTags`, { apiKey, photoId, tags }, {}, `write`)
}

export default setTags
