import Flickr from "@/flickr"

async function remove({ flickr = Flickr, photosetId = `` } = {}) {
  return await flickr.fetchResource(`flickr.photosets.delete`, { photosetId }, {}, `write`)
}

export default remove
