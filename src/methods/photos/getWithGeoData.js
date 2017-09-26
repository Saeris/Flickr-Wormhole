import Flickr from "@/flickr"

export default async function getWithGeoData(
  { apiKey = Flickr.apiKey } = {},
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
  return await Flickr.fetchResource(
    `flickr.photos.getWithGeoData`,
    { apiKey },
    { minUploadDate, maxUploadDate, minTakenDate, maxTakenDate, privacyFilter, media, extras, page, perPage },
    `read`
  )
}
