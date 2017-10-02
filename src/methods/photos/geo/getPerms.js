import Flickr from "@/flickr"

async function getPerms({ flickr = Flickr, photoId = `` } = {}) {
  return await flickr.fetchResource(`flickr.photos.geo.getPerms`, { photoId }, {}, `read`)
}

export default getPerms
