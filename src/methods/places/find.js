import Flickr from "@/flickr"

async function find({ flickr = Flickr, query = `` } = {}) {
  return await flickr.fetchResource(`flickr.places.find`, { query })
}

export default find
