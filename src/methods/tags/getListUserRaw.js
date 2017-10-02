import Flickr from "@/flickr"

async function getListUserRaw({ flickr = Flickr } = {}, { tag = `` } = {}) {
  return await flickr.fetchResource(`flickr.tags.getListUserRaw`, {}, { tag })
}

export default getListUserRaw
