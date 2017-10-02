import Flickr from "@/flickr"

async function getPopular(
  { flickr = Flickr } = {},
  { userId = ``, extras = ``, page = 1, perPage = 100, sort = `interesting` } = {}
) {
  return await flickr.fetchResource(`flickr.photos.getPopular`, {}, { userId, extras, page, perPage, sort })
}

export default getPopular
