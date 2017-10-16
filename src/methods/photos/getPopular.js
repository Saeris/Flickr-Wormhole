import Flickr from "@/flickr"

export default function getPopular(
  { flickr = Flickr } = {},
  { userId = ``, extras = ``, page = 1, perPage = 100, sort = `interesting` } = {}
) {
  return flickr.fetchResource(`flickr.photos.getPopular`, {}, { userId, extras, page, perPage, sort })
}
