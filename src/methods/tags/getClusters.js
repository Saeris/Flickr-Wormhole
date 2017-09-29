import Flickr from "@/flickr"

async function getClusters({ apiKey = Flickr.apiKey, tag = `` } = {}) {
  return await Flickr.fetchResource(`flickr.tags.getClusters`, { apiKey, tag })
}

export default getClusters
