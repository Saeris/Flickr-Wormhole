import Flickr from "@/flickr"

export default function placesForContacts(
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
  return flickr.fetchResource(
    `flickr.places.placesForContacts`,
    { placeTypeId },
    { contacts, minUploadDate, maxUploadDate, minTakenDate, maxTakenDate, threshold, placeId, woeId },
    `read`
  )
}
