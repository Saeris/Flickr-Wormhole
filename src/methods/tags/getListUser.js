import Flickr from "@/flickr"

async function getListUser({ flickr = Flickr } = {}, { userId = `` } = {}) {
  return await flickr.fetchResource(`flickr.tags.getListUser`, {}, { userId })
}

export default getListUser
