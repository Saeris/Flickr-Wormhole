import Flickr from "@/flickr"

export default function placesForUser(
  { flickr = Flickr, userId = ``, placeTypeId = `` } = {},
  {
    minUploadDate = ``,
    maxUploadDate = ``,
    minTakenDate = ``,
    maxTakenDate = ``,
    threshold = ``,
    placeId = ``,
    woeId = ``
  } = {}
) {
  return flickr.fetchResource(
    `flickr.places.placesForUser`,
    { userId, placeTypeId },
    { minUploadDate, maxUploadDate, minTakenDate, maxTakenDate, threshold, placeId, woeId },
    `read`
  )
}
