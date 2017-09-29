import Flickr from "@/flickr"

async function getInfo({ apiKey = Flickr.apiKey } = {}) {
  return await Flickr.fetchResource(`flickr.photos.licenses.getInfo`, { apiKey })
}

export default getInfo
