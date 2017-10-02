import Flickr from "@/flickr"

async function userPhotos({ flickr = Flickr } = {}, { timeframe = ``, page = 1, perPage = 10 } = {}) {
  return await flickr.fetchResource(`flickr.activity.userPhotos`, {}, { timeframe, page, perPage }, `read`)
}

export default userPhotos
