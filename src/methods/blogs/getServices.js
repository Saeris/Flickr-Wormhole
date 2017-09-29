import Flickr from "@/flickr"

async function getServices({ apiKey = Flickr.apiKey } = {}) {
  return await Flickr.fetchResource(`flickr.blogs.getServices`, { apiKey })
}

export default getServices
