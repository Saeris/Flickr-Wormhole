import Flickr from "@/flickr"

async function getInfo({ apiKey = Flickr.apiKey } = {}, { placeId = ``, woeId = `` } = {}) {
  return await Flickr.fetchResource(`flickr.places.getInfo`, { apiKey }, { placeId, woeId })
}

export default getInfo
