import Flickr from "@/flickr"

async function getListUserPopular({ apiKey = Flickr.apiKey } = {}, { userId = ``, count = 10 } = {}) {
  return await Flickr.fetchResource(`flickr.tags.getListUserPopular`, { apiKey }, { userId, count })
}

export default getListUserPopular
