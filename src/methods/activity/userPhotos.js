import Flickr from "@/flickr"

export default async function userPhotos(
  { apiKey = Flickr.apiKey } = {},
  { timeframe = ``, page = 1, perPage = 10 } = {}
) {
  return await Flickr.fetchResource(`flickr.activity.userPhotos`, { apiKey }, { timeframe, page, perPage }, `read`)
}
