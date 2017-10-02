import Flickr from "@/flickr"

async function addTags({ flickr = Flickr, photoId = ``, tags = `` } = {}) {
  return await flickr.fetchResource(`flickr.photos.addTags`, { photoId, tags }, {}, `write`)
}

export default addTags
