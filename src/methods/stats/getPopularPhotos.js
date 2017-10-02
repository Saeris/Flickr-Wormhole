import Flickr from "@/flickr"

async function getPopularPhotos({ flickr = Flickr } = {}, { date = ``, page = 1, perPage = 25, sort = `views` } = {}) {
  return await flickr.fetchResource(`flickr.stats.getPopularPhotos`, {}, { date, page, perPage, sort }, `read`)
}

export default getPopularPhotos
