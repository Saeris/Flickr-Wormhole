import Flickr from "@/flickr"

async function getList({ flickr = Flickr } = {}) {
  return await flickr.fetchResource(`flickr.panda.getList`, {})
}

export default getList
