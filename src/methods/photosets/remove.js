import Flickr from "@/flickr"

export default async function remove({ apiKey = Flickr.apiKey, photosetId = `` } = {}) {
  return await Flickr.fetchResource(`flickr.photosets.delete`, { apiKey, photosetId }, {}, `write`)
}
