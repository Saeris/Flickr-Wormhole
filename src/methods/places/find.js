import Flickr from "@/flickr"

async function find({ apiKey = Flickr.apiKey, query = `` } = {}) {
  return await Flickr.fetchResource(`flickr.places.find`, { apiKey, query })
}

export default find
