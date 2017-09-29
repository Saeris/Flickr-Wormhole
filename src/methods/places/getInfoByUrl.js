import Flickr from "@/flickr"

async function getInfoByUrl({ apiKey = Flickr.apiKey, url = `` } = {}) {
  return await Flickr.fetchResource(`flickr.places.getInfoByUrl`, { apiKey, url })
}

export default getInfoByUrl
