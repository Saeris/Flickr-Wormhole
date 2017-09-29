import Flickr from "@/flickr"

async function userPhotos({ apiKey = Flickr.apiKey } = {}, { timeframe = ``, page = 1, perPage = 10 } = {}) {
  return await Flickr.fetchResource(`flickr.activity.userPhotos`, { apiKey }, { timeframe, page, perPage }, `read`)
}

export default userPhotos
