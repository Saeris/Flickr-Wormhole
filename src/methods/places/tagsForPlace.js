import Flickr from "@/flickr"

export default function tagsForPlace(
  { flickr = Flickr } = {},
  { minUploadDate = ``, maxUploadDate = ``, minTakenDate = ``, maxTakenDate = ``, placeId = ``, woeId = `` } = {}
) {
  return flickr.fetchResource(
    `flickr.places.tagsForPlace`,
    {},
    { minUploadDate, maxUploadDate, minTakenDate, maxTakenDate, placeId, woeId }
  )
}
