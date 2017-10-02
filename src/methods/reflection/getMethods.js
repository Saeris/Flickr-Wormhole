import Flickr from "@/flickr"

async function getMethods({ flickr = Flickr } = {}) {
  return await flickr.fetchResource(`flickr.reflection.getMethods`)
}

export default getMethods
