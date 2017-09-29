import Flickr from "@/flickr"

async function getPopularPhotos(
  { apiKey = Flickr.apiKey } = {},
  { date = ``, page = 1, perPage = 25, sort = `views` } = {}
) {
  return await Flickr.fetchResource(`flickr.stats.getPopularPhotos`, { apiKey }, { date, page, perPage, sort }, `read`)
}

export default getPopularPhotos
