import Flickr from "@/flickr"

async function empty({ flickr = Flickr } = {}) {
  return await flickr.fetchResource(`flickr.test.null`, {}, {}, `read`)
}

export default empty
