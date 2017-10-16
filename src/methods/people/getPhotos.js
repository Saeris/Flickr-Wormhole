import Flickr from "@/flickr"

export default function getPhotos(
  { flickr = Flickr, userId = `` } = {},
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
  return flickr.fetchResource(
    `flickr.people.getPhotos`,
    { userId },
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
