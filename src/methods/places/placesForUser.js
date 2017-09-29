import Flickr from "@/flickr"

async function placesForUser(
  { apiKey = Flickr.apiKey, userId = ``, placeTypeId = `` } = {},
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
  return await Flickr.fetchResource(
    `flickr.places.placesForUser`,
    { apiKey, userId, placeTypeId },
    { minUploadDate, maxUploadDate, minTakenDate, maxTakenDate, threshold, placeId, woeId },
    `read`
  )
}

export default placesForUser
