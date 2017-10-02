import Flickr from "@/flickr"

async function getInfo({ flickr = Flickr } = {}) {
  return await flickr.fetchResource(`flickr.photos.licenses.getInfo`)
}

export default getInfo
