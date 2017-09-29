import Flickr from "@/flickr"

async function addTags({ apiKey = Flickr.apiKey, photoId = ``, tags = `` } = {}) {
  return await Flickr.fetchResource(`flickr.photos.addTags`, { apiKey, photoId, tags }, {}, `write`)
}

export default addTags
