import Flickr from "@/flickr"

export default function getPhotoReferrers(
  { flickr = Flickr, date = ``, domain = `` } = {},
  { photoId = ``, page = 1, perPage = 25 } = {}
) {
  return flickr.fetchResource(`flickr.stats.getPhotoReferrers`, { date, domain }, { photoId, page, perPage }, `read`)
}
