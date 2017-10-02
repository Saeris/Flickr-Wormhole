import Flickr from "@/flickr"

async function getClusterPhotos({ flickr = Flickr, tag = ``, clusterId = `` } = {}) {
  return await flickr.fetchResource(`flickr.tags.getClusterPhotos`, { tag, clusterId })
}

export default getClusterPhotos
