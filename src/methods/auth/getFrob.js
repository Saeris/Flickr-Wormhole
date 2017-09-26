import Flickr from "@/flickr"

export default async function getFrob({ apiKey = Flickr.apiKey } = {}) {
  return await Flickr.fetchResource(`flickr.auth.getFrob`, { apiKey })
}
