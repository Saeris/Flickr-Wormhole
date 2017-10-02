import Flickr from "@/flickr"

async function getGroups({ flickr = Flickr } = {}, { page = 1, perPage = 400 } = {}) {
  return await flickr.fetchResource(`flickr.groups.pools.getGroups`, {}, { page, perPage }, `read`)
}

export default getGroups
