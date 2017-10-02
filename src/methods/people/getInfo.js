import Flickr from "@/flickr"

async function getInfo({ flickr = Flickr, userId = `` } = {}) {
  return await flickr.fetchResource(`flickr.people.getInfo`, { userId })
}

export default getInfo
