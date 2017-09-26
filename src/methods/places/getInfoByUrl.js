import Flickr from "@/flickr"

export default async function getInfoByUrl({ apiKey = Flickr.apiKey, url = `` } = {}) {
  return await Flickr.fetchResource(`flickr.places.getInfoByUrl`, { apiKey, url })
}
