import Flickr from "@/flickr"

export default async function getInfo({ apiKey = Flickr.apiKey } = {}) {
  return await Flickr.fetchResource(`flickr.photos.licenses.getInfo`, { apiKey })
}
