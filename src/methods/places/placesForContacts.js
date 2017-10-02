import Flickr from "@/flickr"

async function placesForContacts(
  { flickr = Flickr, placeTypeId = `` } = {},
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
  return await flickr.fetchResource(
    `flickr.places.placesForContacts`,
    { placeTypeId },
    { contacts, minUploadDate, maxUploadDate, minTakenDate, maxTakenDate, threshold, placeId, woeId },
    `read`
  )
}

export default placesForContacts
