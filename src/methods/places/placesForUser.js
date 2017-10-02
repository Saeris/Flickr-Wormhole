import Flickr from "@/flickr"

async function placesForUser(
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
  return await flickr.fetchResource(
    `flickr.places.placesForUser`,
    { userId, placeTypeId },
    { minUploadDate, maxUploadDate, minTakenDate, maxTakenDate, threshold, placeId, woeId },
    `read`
  )
}

export default placesForUser
