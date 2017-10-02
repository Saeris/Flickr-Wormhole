import Flickr from "@/flickr"

async function getFrob({ flickr = Flickr } = {}) {
  return await flickr.fetchResource(`flickr.auth.getFrob`)
}

export default getFrob
