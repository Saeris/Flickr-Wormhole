import Flickr from "@/flickr"

async function getPhotos(
  { apiKey = Flickr.apiKey, userId = `` } = {},
  {
    safeSearch = 0,
    minUploadDate = ``,
    maxUploadDate = ``,
    minTakenDate = ``,
    maxTakenDate = ``,
    contentType = 0,
    privacyFilter = 0,
    extras = ``,
    page = 1,
    perPage = 100
  } = {}
) {
  return await Flickr.fetchResource(
    `flickr.people.getPhotos`,
    { apiKey, userId },
    {
      safeSearch,
      minUploadDate,
      maxUploadDate,
      minTakenDate,
      maxTakenDate,
      contentType,
      privacyFilter,
      extras,
      page,
      perPage
    }
  )
}

export default getPhotos
