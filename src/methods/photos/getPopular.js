import Flickr from "@/flickr"

export default async function getPopular(
  { apiKey = Flickr.apiKey } = {},
  { userId = ``, extras = ``, page = 1, perPage = 100, sort = `interesting` } = {}
) {
  return await Flickr.fetchResource(`flickr.photos.getPopular`, { apiKey }, { userId, extras, page, perPage, sort })
}
