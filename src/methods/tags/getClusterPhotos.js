import Flickr from "@/flickr"

export default async function getClusterPhotos({ apiKey = Flickr.apiKey, tag = ``, clusterId = `` } = {}) {
  return await Flickr.fetchResource(`flickr.tags.getClusterPhotos`, { apiKey, tag, clusterId })
}
