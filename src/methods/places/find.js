import Flickr from "@/flickr"

export default async function find({ apiKey = Flickr.apiKey, query = `` } = {}) {
  return await Flickr.fetchResource(`flickr.places.find`, { apiKey, query })
}
