import Flickr from "@/flickr"

async function remove({ apiKey = Flickr.apiKey, photosetId = `` } = {}) {
  return await Flickr.fetchResource(`flickr.photosets.delete`, { apiKey, photosetId }, {}, `write`)
}

export default remove
