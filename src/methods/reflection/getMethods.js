import Flickr from "@/flickr"

export default async function getMethods({ apiKey = Flickr.apiKey } = {}) {
  return await Flickr.fetchResource(`flickr.reflection.getMethods`, { apiKey })
}
