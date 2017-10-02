import Flickr from "@/flickr"

async function getCSVFiles({ flickr = Flickr } = {}) {
  return await flickr.fetchResource(`flickr.stats.getCSVFiles`, {}, {}, `read`)
}

export default getCSVFiles
