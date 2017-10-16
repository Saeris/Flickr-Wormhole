import Flickr from "@/flickr"

export default function getPopularPhotos(
  { flickr = Flickr } = {},
  { date = ``, page = 1, perPage = 25, sort = `views` } = {}
) {
  return flickr.fetchResource(`flickr.stats.getPopularPhotos`, {}, { date, page, perPage, sort }, `read`)
}
