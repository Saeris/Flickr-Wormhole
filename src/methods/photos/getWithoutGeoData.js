import Flickr from "@/flickr"

export default function getWithoutGeoData(
  { flickr = Flickr } = {},
  {
    minUploadDate = ``,
    maxUploadDate = ``,
    minTakenDate = ``,
    maxTakenDate = ``,
    privacyFilter = 0,
    media = `all`,
    extras = ``,
    page = 1,
    perPage = 100
  } = {}
) {
  return flickr.fetchResource(
    `flickr.photos.getWithoutGeoData`,
    {},
    { minUploadDate, maxUploadDate, minTakenDate, maxTakenDate, privacyFilter, media, extras, page, perPage },
    `read`
  )
}
