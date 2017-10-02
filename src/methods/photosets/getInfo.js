import Flickr from "@/flickr"

async function getInfo({ flickr = Flickr, photosetId = ``, userId = `` } = {}) {
  return await flickr.fetchResource(`flickr.photosets.getInfo`, { photosetId, userId })
}

export default getInfo
