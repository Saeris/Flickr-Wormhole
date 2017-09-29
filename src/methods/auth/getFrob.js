import Flickr from "@/flickr"

async function getFrob({ apiKey = Flickr.apiKey } = {}) {
  return await Flickr.fetchResource(`flickr.auth.getFrob`, { apiKey })
}

export default getFrob
