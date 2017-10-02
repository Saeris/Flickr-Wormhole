import Flickr from "@/flickr"

async function getListUserPopular({ flickr = Flickr } = {}, { userId = ``, count = 10 } = {}) {
  return await flickr.fetchResource(`flickr.tags.getListUserPopular`, {}, { userId, count })
}

export default getListUserPopular
