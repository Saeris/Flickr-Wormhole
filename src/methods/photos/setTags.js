import Flickr from "@/flickr"

async function setTags({ flickr = Flickr, photoId = ``, tags = `` } = {}) {
  return await flickr.fetchResource(`flickr.photos.setTags`, { photoId, tags }, {}, `write`)
}

export default setTags
