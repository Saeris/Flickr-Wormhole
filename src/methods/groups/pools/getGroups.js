import Flickr from "@/flickr"

export default function getGroups({ flickr = Flickr } = {}, { page = 1, perPage = 400 } = {}) {
  return flickr.fetchResource(`flickr.groups.pools.getGroups`, {}, { page, perPage }, `read`)
}
