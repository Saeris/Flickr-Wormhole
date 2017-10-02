import Flickr from "@/flickr"

async function tagsForPlace(
  { flickr = Flickr } = {},
  { minUploadDate = ``, maxUploadDate = ``, minTakenDate = ``, maxTakenDate = ``, placeId = ``, woeId = `` } = {}
) {
  return await flickr.fetchResource(
    `flickr.places.tagsForPlace`,
    {},
    { minUploadDate, maxUploadDate, minTakenDate, maxTakenDate, placeId, woeId }
  )
}

export default tagsForPlace
