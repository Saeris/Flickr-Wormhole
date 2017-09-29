import Flickr from "@/flickr"

async function getPerms({ apiKey = Flickr.apiKey, photoId = `` } = {}) {
  return await Flickr.fetchResource(`flickr.photos.getPerms`, { apiKey, photoId }, {}, `read`)
}

export default getPerms
