import Flickr from "@/flickr"

async function getRelated({ flickr = Flickr, tag = `` } = {}) {
  return await flickr.fetchResource(`flickr.tags.getRelated`, { tag })
}

export default getRelated
