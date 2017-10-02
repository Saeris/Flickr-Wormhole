import Flickr from "@/flickr"

async function getHotList({ flickr = Flickr } = {}, { period = `day`, count = 20 } = {}) {
  return await flickr.fetchResource(`flickr.tags.getHotList`, {}, { period, count })
}

export default getHotList
