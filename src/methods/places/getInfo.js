import Flickr from "@/flickr"

async function getInfo({ flickr = Flickr } = {}, { placeId = ``, woeId = `` } = {}) {
  return await flickr.fetchResource(`flickr.places.getInfo`, {}, { placeId, woeId })
}

export default getInfo
