import Flickr from "@/flickr"

export default async function getClusters({ apiKey = Flickr.apiKey, tag = `` } = {}) {
  return await Flickr.fetchResource(`flickr.tags.getClusters`, { apiKey, tag })
}
