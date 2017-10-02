import Flickr from "@/flickr"

async function getClusters({ flickr = Flickr, tag = `` } = {}) {
  return await flickr.fetchResource(`flickr.tags.getClusters`, { tag })
}

export default getClusters
