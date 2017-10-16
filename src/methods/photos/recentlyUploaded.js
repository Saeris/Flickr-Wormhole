import Flickr from "@/flickr"

export default function recentlyUploaded(
  { flickr = Flickr } = {},
  { minDate = ``, extras = ``, page = 1, perPage = 100 } = {}
) {
  return flickr.fetchResource(`flickr.photos.recentlyUpdated`, {}, { minDate, extras, page, perPage }, `read`)
}
