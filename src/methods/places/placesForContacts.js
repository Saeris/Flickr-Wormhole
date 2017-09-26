import Flickr from "@/flickr"

export default async function placesForContacts(
  { apiKey = Flickr.apiKey, placeTypeId = `` } = {},
  {
    contacts = `all`,
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
    `flickr.places.placesForContacts`,
    { apiKey, placeTypeId },
    { contacts, minUploadDate, maxUploadDate, minTakenDate, maxTakenDate, threshold, placeId, woeId },
    `read`
  )
}
