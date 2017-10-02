import Flickr from "@/flickr"

async function browse({ flickr = Flickr } = {}, { catId = `` } = {}) {
  return await flickr.fetchResource(`flickr.groups.browse`, {}, { catId }, `read`)
}

export default browse
